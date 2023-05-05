// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/refractor/lang/cshtml.js":[function(require,module,exports) {
'use strict'
var refractorCsharp = require('./csharp.js')
module.exports = cshtml
cshtml.displayName = 'cshtml'
cshtml.aliases = ['razor']
function cshtml(Prism) {
  Prism.register(refractorCsharp)
  // Docs:
  // https://docs.microsoft.com/en-us/aspnet/core/razor-pages/?view=aspnetcore-5.0&tabs=visual-studio
  // https://docs.microsoft.com/en-us/aspnet/core/mvc/views/razor?view=aspnetcore-5.0
  ;(function (Prism) {
    var commentLike = /\/(?![/*])|\/\/.*[\r\n]|\/\*[^*]*(?:\*(?!\/)[^*]*)*\*\//
      .source
    var stringLike =
      /@(?!")|"(?:[^\r\n\\"]|\\.)*"|@"(?:[^\\"]|""|\\[\s\S])*"(?!")/.source +
      '|' +
      /'(?:(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'|(?=[^\\](?!')))/.source
    /**
     * Creates a nested pattern where all occurrences of the string `<<self>>` are replaced with the pattern itself.
     *
     * @param {string} pattern
     * @param {number} depthLog2
     * @returns {string}
     */
    function nested(pattern, depthLog2) {
      for (var i = 0; i < depthLog2; i++) {
        pattern = pattern.replace(/<self>/g, function () {
          return '(?:' + pattern + ')'
        })
      }
      return pattern
        .replace(/<self>/g, '[^\\s\\S]')
        .replace(/<str>/g, '(?:' + stringLike + ')')
        .replace(/<comment>/g, '(?:' + commentLike + ')')
    }
    var round = nested(/\((?:[^()'"@/]|<str>|<comment>|<self>)*\)/.source, 2)
    var square = nested(/\[(?:[^\[\]'"@/]|<str>|<comment>|<self>)*\]/.source, 2)
    var curly = nested(/\{(?:[^{}'"@/]|<str>|<comment>|<self>)*\}/.source, 2)
    var angle = nested(/<(?:[^<>'"@/]|<str>|<comment>|<self>)*>/.source, 2) // Note about the above bracket patterns:
    // They all ignore HTML expressions that might be in the C# code. This is a problem because HTML (like strings and
    // comments) is parsed differently. This is a huge problem because HTML might contain brackets and quotes which
    // messes up the bracket and string counting implemented by the above patterns.
    //
    // This problem is not fixable because 1) HTML expression are highly context sensitive and very difficult to detect
    // and 2) they require one capturing group at every nested level. See the `tagRegion` pattern to admire the
    // complexity of an HTML expression.
    //
    // To somewhat alleviate the problem a bit, the patterns for characters (e.g. 'a') is very permissive, it also
    // allows invalid characters to support HTML expressions like this: <p>That's it!</p>.
    var tagAttrs =
      /(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?/
        .source
    var tagContent = /(?!\d)[^\s>\/=$<%]+/.source + tagAttrs + /\s*\/?>/.source
    var tagRegion =
      /\B@?/.source +
      '(?:' +
      /<([a-zA-Z][\w:]*)/.source +
      tagAttrs +
      /\s*>/.source +
      '(?:' +
      (/[^<]/.source +
        '|' + // all tags that are not the start tag
        // eslint-disable-next-line regexp/strict
        /<\/?(?!\1\b)/.source +
        tagContent +
        '|' + // nested start tag
        nested(
          // eslint-disable-next-line regexp/strict
          /<\1/.source +
            tagAttrs +
            /\s*>/.source +
            '(?:' +
            (/[^<]/.source +
              '|' + // all tags that are not the start tag
              // eslint-disable-next-line regexp/strict
              /<\/?(?!\1\b)/.source +
              tagContent +
              '|' +
              '<self>') +
            ')*' + // eslint-disable-next-line regexp/strict
            /<\/\1\s*>/.source,
          2
        )) +
      ')*' + // eslint-disable-next-line regexp/strict
      /<\/\1\s*>/.source +
      '|' +
      /</.source +
      tagContent +
      ')' // Now for the actual language definition(s):
    //
    // Razor as a language has 2 parts:
    //  1) CSHTML: A markup-like language that has been extended with inline C# code expressions and blocks.
    //  2) C#+HTML: A variant of C# that can contain CSHTML tags as expressions.
    //
    // In the below code, both CSHTML and C#+HTML will be create as separate language definitions that reference each
    // other. However, only CSHTML will be exported via `Prism.languages`.
    Prism.languages.cshtml = Prism.languages.extend('markup', {})
    var csharpWithHtml = Prism.languages.insertBefore(
      'csharp',
      'string',
      {
        html: {
          pattern: RegExp(tagRegion),
          greedy: true,
          inside: Prism.languages.cshtml
        }
      },
      {
        csharp: Prism.languages.extend('csharp', {})
      }
    )
    var cs = {
      pattern: /\S[\s\S]*/,
      alias: 'language-csharp',
      inside: csharpWithHtml
    }
    Prism.languages.insertBefore('cshtml', 'prolog', {
      'razor-comment': {
        pattern: /@\*[\s\S]*?\*@/,
        greedy: true,
        alias: 'comment'
      },
      block: {
        pattern: RegExp(
          /(^|[^@])@/.source +
            '(?:' +
            [
              // @{ ... }
              curly, // @code{ ... }
              /(?:code|functions)\s*/.source + curly, // @for (...) { ... }
              /(?:for|foreach|lock|switch|using|while)\s*/.source +
                round +
                /\s*/.source +
                curly, // @do { ... } while (...);
              /do\s*/.source +
                curly +
                /\s*while\s*/.source +
                round +
                /(?:\s*;)?/.source, // @try { ... } catch (...) { ... } finally { ... }
              /try\s*/.source +
                curly +
                /\s*catch\s*/.source +
                round +
                /\s*/.source +
                curly +
                /\s*finally\s*/.source +
                curly, // @if (...) {...} else if (...) {...} else {...}
              /if\s*/.source +
                round +
                /\s*/.source +
                curly +
                '(?:' +
                /\s*else/.source +
                '(?:' +
                /\s+if\s*/.source +
                round +
                ')?' +
                /\s*/.source +
                curly +
                ')*'
            ].join('|') +
            ')'
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          keyword: /^@\w*/,
          csharp: cs
        }
      },
      directive: {
        pattern:
          /^([ \t]*)@(?:addTagHelper|attribute|implements|inherits|inject|layout|model|namespace|page|preservewhitespace|removeTagHelper|section|tagHelperPrefix|using)(?=\s).*/m,
        lookbehind: true,
        greedy: true,
        inside: {
          keyword: /^@\w+/,
          csharp: cs
        }
      },
      value: {
        pattern: RegExp(
          /(^|[^@])@/.source +
            /(?:await\b\s*)?/.source +
            '(?:' +
            /\w+\b/.source +
            '|' +
            round +
            ')' +
            '(?:' +
            /[?!]?\.\w+\b/.source +
            '|' +
            round +
            '|' +
            square +
            '|' +
            angle +
            round +
            ')*'
        ),
        lookbehind: true,
        greedy: true,
        alias: 'variable',
        inside: {
          keyword: /^@/,
          csharp: cs
        }
      },
      'delegate-operator': {
        pattern: /(^|[^@])@(?=<)/,
        lookbehind: true,
        alias: 'operator'
      }
    })
    Prism.languages.razor = Prism.languages.cshtml
  })(Prism)
}

},{"./csharp.js":"../node_modules/refractor/lang/csharp.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60189" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/cshtml.0481d9cf.js.map