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
})({"../node_modules/refractor/lang/gml.js":[function(require,module,exports) {
'use strict'

module.exports = gml
gml.displayName = 'gml'
gml.aliases = []
function gml(Prism) {
  Prism.languages.gamemakerlanguage = Prism.languages.gml =
    Prism.languages.extend('clike', {
      keyword:
        /\b(?:break|case|continue|default|do|else|enum|exit|for|globalvar|if|repeat|return|switch|until|var|while)\b/,
      number:
        /(?:\b0x[\da-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ulf]{0,4}/i,
      operator:
        /--|\+\+|[-+%/=]=?|!=|\*\*?=?|<[<=>]?|>[=>]?|&&?|\^\^?|\|\|?|~|\b(?:and|at|not|or|with|xor)\b/,
      constant:
        /\b(?:GM_build_date|GM_version|action_(?:continue|restart|reverse|stop)|all|gamespeed_(?:fps|microseconds)|global|local|noone|other|pi|pointer_(?:invalid|null)|self|timezone_(?:local|utc)|undefined|ev_(?:create|destroy|step|alarm|keyboard|mouse|collision|other|draw|draw_(?:begin|end|post|pre)|keypress|keyrelease|trigger|(?:left|middle|no|right)_button|(?:left|middle|right)_press|(?:left|middle|right)_release|mouse_(?:enter|leave|wheel_down|wheel_up)|global_(?:left|middle|right)_button|global_(?:left|middle|right)_press|global_(?:left|middle|right)_release|joystick(?:1|2)_(?:button1|button2|button3|button4|button5|button6|button7|button8|down|left|right|up)|outside|boundary|game_start|game_end|room_start|room_end|no_more_lives|animation_end|end_of_path|no_more_health|user\d|gui|gui_begin|gui_end|step_(?:begin|end|normal))|vk_(?:alt|anykey|backspace|control|delete|down|end|enter|escape|home|insert|left|nokey|pagedown|pageup|pause|printscreen|return|right|shift|space|tab|up|f\d|numpad\d|add|decimal|divide|lalt|lcontrol|lshift|multiply|ralt|rcontrol|rshift|subtract)|achievement_(?:filter_(?:all_players|favorites_only|friends_only)|friends_info|info|leaderboard_info|our_info|pic_loaded|show_(?:achievement|bank|friend_picker|leaderboard|profile|purchase_prompt|ui)|type_challenge|type_score_challenge)|asset_(?:font|object|path|room|script|shader|sound|sprite|tiles|timeline|unknown)|audio_(?:3d|falloff_(?:exponent_distance|exponent_distance_clamped|inverse_distance|inverse_distance_clamped|linear_distance|linear_distance_clamped|none)|mono|new_system|old_system|stereo)|bm_(?:add|complex|dest_alpha|dest_color|dest_colour|inv_dest_alpha|inv_dest_color|inv_dest_colour|inv_src_alpha|inv_src_color|inv_src_colour|max|normal|one|src_alpha|src_alpha_sat|src_color|src_colour|subtract|zero)|browser_(?:chrome|firefox|ie|ie_mobile|not_a_browser|opera|safari|safari_mobile|tizen|unknown|windows_store)|buffer_(?:bool|f16|f32|f64|fast|fixed|generalerror|grow|invalidtype|network|outofbounds|outofspace|s16|s32|s8|seek_end|seek_relative|seek_start|string|text|u16|u32|u64|u8|vbuffer|wrap)|c_(?:aqua|black|blue|dkgray|fuchsia|gray|green|lime|ltgray|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)|cmpfunc_(?:always|equal|greater|greaterequal|less|lessequal|never|notequal)|cr_(?:appstart|arrow|beam|cross|default|drag|handpoint|hourglass|none|size_all|size_nesw|size_ns|size_nwse|size_we|uparrow)|cull_(?:clockwise|counterclockwise|noculling)|device_(?:emulator|tablet)|device_ios_(?:ipad|ipad_retina|iphone|iphone5|iphone6|iphone6plus|iphone_retina|unknown)|display_(?:landscape|landscape_flipped|portrait|portrait_flipped)|dll_(?:cdecl|cdel|stdcall)|ds_type_(?:grid|list|map|priority|queue|stack)|ef_(?:cloud|ellipse|explosion|firework|flare|rain|ring|smoke|smokeup|snow|spark|star)|fa_(?:archive|bottom|center|directory|hidden|left|middle|readonly|right|sysfile|top|volumeid)|fb_login_(?:default|fallback_to_webview|forcing_safari|forcing_webview|no_fallback_to_webview|use_system_account)|iap_(?:available|canceled|ev_consume|ev_product|ev_purchase|ev_restore|ev_storeload|failed|purchased|refunded|status_available|status_loading|status_processing|status_restoring|status_unavailable|status_uninitialised|storeload_failed|storeload_ok|unavailable)|leaderboard_type_(?:number|time_mins_secs)|lighttype_(?:dir|point)|matrix_(?:projection|view|world)|mb_(?:any|left|middle|none|right)|network_(?:config_(?:connect_timeout|disable_reliable_udp|enable_reliable_udp|use_non_blocking_socket)|socket_(?:bluetooth|tcp|udp)|type_(?:connect|data|disconnect|non_blocking_connect))|of_challenge_(?:lose|tie|win)|os_(?:android|ios|linux|macosx|ps3|ps4|psvita|unknown|uwp|win32|win8native|windows|winphone|xboxone)|phy_debug_render_(?:aabb|collision_pairs|coms|core_shapes|joints|obb|shapes)|phy_joint_(?:anchor_1_x|anchor_1_y|anchor_2_x|anchor_2_y|angle|angle_limits|damping_ratio|frequency|length_1|length_2|lower_angle_limit|max_force|max_length|max_motor_force|max_motor_torque|max_torque|motor_force|motor_speed|motor_torque|reaction_force_x|reaction_force_y|reaction_torque|speed|translation|upper_angle_limit)|phy_particle_data_flag_(?:category|color|colour|position|typeflags|velocity)|phy_particle_flag_(?:colormixing|colourmixing|elastic|powder|spring|tensile|viscous|wall|water|zombie)|phy_particle_group_flag_(?:rigid|solid)|pr_(?:linelist|linestrip|pointlist|trianglefan|trianglelist|trianglestrip)|ps_(?:distr|shape)_(?:diamond|ellipse|gaussian|invgaussian|line|linear|rectangle)|pt_shape_(?:circle|cloud|disk|explosion|flare|line|pixel|ring|smoke|snow|spark|sphere|square|star)|ty_(?:real|string)|gp_(?:face\d|axislh|axislv|axisrh|axisrv|padd|padl|padr|padu|select|shoulderl|shoulderlb|shoulderr|shoulderrb|start|stickl|stickr)|lb_disp_(?:none|numeric|time_ms|time_sec)|lb_sort_(?:ascending|descending|none)|ov_(?:achievements|community|friends|gamegroup|players|settings)|ugc_(?:filetype_(?:community|microtrans)|list_(?:Favorited|Followed|Published|Subscribed|UsedOrPlayed|VotedDown|VotedOn|VotedUp|WillVoteLater)|match_(?:AllGuides|Artwork|Collections|ControllerBindings|IntegratedGuides|Items|Items_Mtx|Items_ReadyToUse|Screenshots|UsableInGame|Videos|WebGuides)|query_(?:AcceptedForGameRankedByAcceptanceDate|CreatedByFriendsRankedByPublicationDate|FavoritedByFriendsRankedByPublicationDate|NotYetRated)|query_RankedBy(?:NumTimesReported|PublicationDate|TextSearch|TotalVotesAsc|Trend|Vote|VotesUp)|result_success|sortorder_CreationOrder(?:Asc|Desc)|sortorder_(?:ForModeration|LastUpdatedDesc|SubscriptionDateDesc|TitleAsc|VoteScoreDesc)|visibility_(?:friends_only|private|public))|vertex_usage_(?:binormal|blendindices|blendweight|color|colour|depth|fog|normal|position|psize|sample|tangent|texcoord|textcoord)|vertex_type_(?:float\d|color|colour|ubyte4)|input_type|layerelementtype_(?:background|instance|oldtilemap|particlesystem|sprite|tile|tilemap|undefined)|se_(?:chorus|compressor|echo|equalizer|flanger|gargle|none|reverb)|text_type|tile_(?:flip|index_mask|mirror|rotate)|(?:obj|rm|scr|spr)\w+)\b/,
      variable:
        /\b(?:alarm|application_surface|async_load|background_(?:alpha|blend|color|colour|foreground|height|hspeed|htiled|index|showcolor|showcolour|visible|vspeed|vtiled|width|x|xscale|y|yscale)|bbox_(?:bottom|left|right|top)|browser_(?:height|width)|caption_(?:health|lives|score)|current_(?:day|hour|minute|month|second|time|weekday|year)|cursor_sprite|debug_mode|delta_time|direction|display_aa|error_(?:last|occurred)|event_(?:action|number|object|type)|fps|fps_real|friction|game_(?:display|project|save)_(?:id|name)|gamemaker_(?:pro|registered|version)|gravity|gravity_direction|(?:h|v)speed|health|iap_data|id|image_(?:alpha|angle|blend|depth|index|number|speed|xscale|yscale)|instance_(?:count|id)|keyboard_(?:key|lastchar|lastkey|string)|layer|lives|mask_index|mouse_(?:button|lastbutton|x|y)|object_index|os_(?:browser|device|type|version)|path_(?:endaction|index|orientation|position|positionprevious|scale|speed)|persistent|phy_(?:rotation|(?:col_normal|collision|com|linear_velocity|position|speed)_(?:x|y)|angular_(?:damping|velocity)|position_(?:x|y)previous|speed|linear_damping|bullet|fixed_rotation|active|mass|inertia|dynamic|kinematic|sleeping|collision_points)|pointer_(?:invalid|null)|room|room_(?:caption|first|height|last|persistent|speed|width)|score|secure_mode|show_(?:health|lives|score)|solid|speed|sprite_(?:height|index|width|xoffset|yoffset)|temp_directory|timeline_(?:index|loop|position|running|speed)|transition_(?:color|kind|steps)|undefined|view_(?:angle|current|enabled|(?:h|v)(?:border|speed)|(?:h|w|x|y)port|(?:h|w|x|y)view|object|surface_id|visible)|visible|webgl_enabled|working_directory|(?:x|y)(?:previous|start)|x|y|argument(?:_relitive|_count|\d)|argument|global|local|other|self)\b/
    })
}

},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../node_modules/refractor/lang/gml.js"], null)
//# sourceMappingURL=/gml.8f998112.js.map