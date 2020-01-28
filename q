warning: LF will be replaced by CRLF in angular.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in package-lock.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/app/app-routing.module.ts.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/app/app.component.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/app/app.component.ts.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/app/app.module.ts.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/environments/environment.prod.ts.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/environments/environment.ts.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/main.ts.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/styles.scss.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in tsconfig.json.
The file will have its original line endings in your working directory
[1mdiff --git a/angular.json b/angular.json[m
[1mindex fb5bf20..f339c1d 100644[m
[1m--- a/angular.json[m
[1m+++ b/angular.json[m
[36m@@ -28,9 +28,14 @@[m
               "src/assets"[m
             ],[m
             "styles": [[m
[31m-              "src/styles.scss"[m
[32m+[m[32m              "./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css",[m
[32m+[m[32m              "src/styles.scss",[m
[32m+[m[32m              "./node_modules/quill/dist/quill.core.css",[m
[32m+[m[32m              "./node_modules/quill/dist/quill.snow.css"[m
             ],[m
[31m-            "scripts": [][m
[32m+[m[32m            "scripts": [[m
[32m+[m[32m              "./node_modules/quill/dist/quill.js"[m
[32m+[m[32m            ][m
           },[m
           "configurations": {[m
             "production": {[m
[36m@@ -61,6 +66,35 @@[m
                   "maximumError": "10kb"[m
                 }[m
               ][m
[32m+[m[32m            },[m
[32m+[m[32m            "preprod": {[m
[32m+[m[32m              "fileReplacements": [[m
[32m+[m[32m                {[m
[32m+[m[32m                  "replace": "src/environments/environment.ts",[m
[32m+[m[32m                  "with": "src/environments/environment.preprod.ts"[m
[32m+[m[32m                }[m
[32m+[m[32m              ],[m
[32m+[m[32m              "optimization": false,[m
[32m+[m[32m              "outputHashing": "all",[m
[32m+[m[32m              "sourceMap": true,[m
[32m+[m[32m              "extractCss": true,[m
[32m+[m[32m              "namedChunks": false,[m
[32m+[m[32m              "aot": false,[m
[32m+[m[32m              "extractLicenses": true,[m
[32m+[m[32m              "vendorChunk": false,[m
[32m+[m[32m              "buildOptimizer": false,[m
[32m+[m[32m              "budgets": [[m
[32m+[m[32m                {[m
[32m+[m[32m                  "type": "initial",[m
[32m+[m[32m                  "maximumWarning": "2mb",[m
[32m+[m[32m                  "maximumError": "5mb"[m
[32m+[m[32m                },[m
[32m+[m[32m                {[m
[32m+[m[32m                  "type": "anyComponentStyle",[m
[32m+[m[32m                  "maximumWarning": "6kb",[m
[32m+[m[32m                  "maximumError": "10kb"[m
[32m+[m[32m                }[m
[32m+[m[32m              ][m
             }[m
           }[m
         },[m
[36m@@ -72,6 +106,9 @@[m
           "configurations": {[m
             "production": {[m
               "browserTarget": "gitam-web:build:production"[m
[32m+[m[32m            },[m
[32m+[m[32m            "preprod": {[m
[32m+[m[32m              "browserTarget": "gitam-web:build:preprod"[m
             }[m
           }[m
         },[m
[36m@@ -93,6 +130,7 @@[m
               "src/assets"[m
             ],[m
             "styles": [[m
[32m+[m[32m              "./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css",[m
               "src/styles.scss"[m
             ],[m
             "scripts": [][m
[36m@@ -124,6 +162,7 @@[m
           }[m
         }[m
       }[m
[31m-    }},[m
[32m+[m[32m    }[m
[32m+[m[32m  },[m
   "defaultProject": "gitam-web"[m
[31m-}[m
\ No newline at end of file[m
[32m+[m[32m}[m
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex d3c12c0..7027cb5 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -134,6 +134,23 @@[m
         "tslib": "^1.9.0"[m
       }[m
     },[m
[32m+[m[32m    "@angular/cdk": {[m
[32m+[m[32m      "version": "8.2.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@angular/cdk/-/cdk-8.2.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-ZwO5Sn720RA2YvBqud0JAHkZXjmjxM0yNzCO8RVtRE9i8Gl26Wk0j0nQeJkVm4zwv2QO8MwbKUKGTMt8evsokA==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "parse5": "^5.0.0",[m
[32m+[m[32m        "tslib": "^1.7.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "parse5": {[m
[32m+[m[32m          "version": "5.1.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/parse5/-/parse5-5.1.1.tgz",[m
[32m+[m[32m          "integrity": "sha512-ugq4DFI0Ptb+WWjAdOK16+u/nHfiIrcE+sh8kZMaM0WllQKLI9rOUq6c2b7cwPkXdzfQESqvoqK6ug7U/Yyzug==",[m
[32m+[m[32m          "optional": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "@angular/cli": {[m
       "version": "8.2.2",[m
       "resolved": "https://registry.npmjs.org/@angular/cli/-/cli-8.2.2.tgz",[m
[36m@@ -996,6 +1013,14 @@[m
       "integrity": "sha512-7EhN9JJbAJcH2xCa+rIOmekjiEuB0qwPdHuD5qn/wwMfRzMZo+Db4hHbR9KHrLH6H82PTwYKye/LLpDaZqoHOA==",[m
       "dev": true[m
     },[m
[32m+[m[32m    "@angular/material": {[m
[32m+[m[32m      "version": "8.2.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@angular/material/-/material-8.2.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-SOczkIaqes+r+9XF/UUiokidfFKBpHkOPIaFK857sFD0FBNPvPEpOr5oHKCG3feERRwAFqHS7Wo2ohVEWypb5A==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "tslib": "^1.7.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "@angular/platform-browser": {[m
       "version": "8.2.14",[m
       "resolved": "https://registry.npmjs.org/@angular/platform-browser/-/platform-browser-8.2.14.tgz",[m
[36m@@ -1179,6 +1204,21 @@[m
         }[m
       }[m
     },[m
[32m+[m[32m    "@ngrx/effects": {[m
[32m+[m[32m      "version": "8.6.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@ngrx/effects/-/effects-8.6.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-JdyJLQbv/wnE0ZPY9DcDOtF9PzJuzsKWmIWgIGunHF18wdjk5O8Zpkcrxq18wDRL6geg5UTtNJRMvTQhpDbzow=="[m
[32m+[m[32m    },[m
[32m+[m[32m    "@ngrx/entity": {[m
[32m+[m[32m      "version": "8.6.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@ngrx/entity/-/entity-8.6.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-Qq+ANgsHd2/i7gam1j05hxA8kPWQyf5ewtCLlbtMJI/qLmvA6ruSE8PYNNwrt90wm4BWdks2zKE5ERzvPzto0w=="[m
[32m+[m[32m    },[m
[32m+[m[32m    "@ngrx/store": {[m
[32m+[m[32m      "version": "8.6.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@ngrx/store/-/store-8.6.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-K4cvCEa+5hw9qrETQWO+Cha3YbVCAT8yaIKJr/N35KntTL9mQMjoL+51JWLZfBwPV0e19CFgJIyrBnVUTxwr2A=="[m
[32m+[m[32m    },[m
     "@ngtools/webpack": {[m
       "version": "8.2.2",[m
       "resolved": "https://registry.npmjs.org/@ngtools/webpack/-/webpack-8.2.2.tgz",[m
[36m@@ -1250,6 +1290,11 @@[m
         "@types/jasmine": "*"[m
       }[m
     },[m
[32m+[m[32m    "@types/lodash": {[m
[32m+[m[32m      "version": "4.14.149",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@types/lodash/-/lodash-4.14.149.tgz",[m
[32m+[m[32m      "integrity": "sha512-ijGqzZt/b7BfzcK9vTrS6MFljQRPn5BFWOx8oE0GYxribu6uV+aA9zZuXI1zc/etK9E8nrgdoF2+LgUw7+9tJQ=="[m
[32m+[m[32m    },[m
     "@types/minimatch": {[m
       "version": "3.0.3",[m
       "resolved": "https://registry.npmjs.org/@types/minimatch/-/minimatch-3.0.3.tgz",[m
[36m@@ -2635,8 +2680,7 @@[m
     "clone": {[m
       "version": "2.1.2",[m
       "resolved": "https://registry.npmjs.org/clone/-/clone-2.1.2.tgz",[m
[31m-      "integrity": "sha1-G39Ln1kfHo+DZwQBYANFoCiHQ18=",[m
[31m-      "dev": true[m
[32m+[m[32m      "integrity": "sha1-G39Ln1kfHo+DZwQBYANFoCiHQ18="[m
     },[m
     "clone-deep": {[m
       "version": "2.0.2",[m
[36m@@ -3114,7 +3158,6 @@[m
       "version": "1.1.1",[m
       "resolved": "https://registry.npmjs.org/deep-equal/-/deep-equal-1.1.1.tgz",[m
       "integrity": "sha512-yd9c5AdiqVcR+JjcwUQb9DkhJc8ngNr0MahEBGvDiJw8puWab2yZlh+nkasOnZP+EGTAP6rRp2JzJhJZzvNF8g==",[m
[31m-      "dev": true,[m
       "requires": {[m
         "is-arguments": "^1.0.4",[m
         "is-date-object": "^1.0.1",[m
[36m@@ -3147,7 +3190,6 @@[m
       "version": "1.1.3",[m
       "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",[m
       "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",[m
[31m-      "dev": true,[m
       "requires": {[m
         "object-keys": "^1.0.12"[m
       }[m
[36m@@ -3812,8 +3854,7 @@[m
     "extend": {[m
       "version": "3.0.2",[m
       "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",[m
[31m-      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",[m
[31m-      "dev": true[m
[32m+[m[32m      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g=="[m
     },[m
     "extend-shallow": {[m
       "version": "3.0.2",[m
[36m@@ -3924,6 +3965,11 @@[m
       "integrity": "sha1-ewUhjd+WZ79/Nwv3/bLLFf3Qqkk=",[m
       "dev": true[m
     },[m
[32m+[m[32m    "fast-diff": {[m
[32m+[m[32m      "version": "1.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/fast-diff/-/fast-diff-1.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-KaJUt+M9t1qaIteSvjc6P3RbMdXsNhK61GRftR6SNxqmhthcd9MGIi4T+o0jD8LUSpSnSKXE20nLtJ3fOHxQig=="[m
[32m+[m[32m    },[m
     "fast-json-stable-stringify": {[m
       "version": "2.0.0",[m
       "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.0.0.tgz",[m
[36m@@ -4198,8 +4244,7 @@[m
     "function-bind": {[m
       "version": "1.1.1",[m
       "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",[m
[31m-      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==",[m
[31m-      "dev": true[m
[32m+[m[32m      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A=="[m
     },[m
     "genfun": {[m
       "version": "5.0.0",[m
[36m@@ -4306,6 +4351,11 @@[m
       "integrity": "sha512-a30VEBm4PEdx1dRB7MFK7BejejvCvBronbLjht+sHuGYj8PHs7M/5Z+rt5lw551vZ7yfTCj4Vuyy3mSJytDWRQ==",[m
       "dev": true[m
     },[m
[32m+[m[32m    "hammerjs": {[m
[32m+[m[32m      "version": "2.0.8",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/hammerjs/-/hammerjs-2.0.8.tgz",[m
[32m+[m[32m      "integrity": "sha1-BO93hiz/K7edMPdpIJWTAiK/YPE="[m
[32m+[m[32m    },[m
     "handle-thing": {[m
       "version": "2.0.0",[m
       "resolved": "https://registry.npmjs.org/handle-thing/-/handle-thing-2.0.0.tgz",[m
[36m@@ -4352,7 +4402,6 @@[m
       "version": "1.0.3",[m
       "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",[m
       "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",[m
[31m-      "dev": true,[m
       "requires": {[m
         "function-bind": "^1.1.1"[m
       }[m
[36m@@ -4875,8 +4924,7 @@[m
     "is-arguments": {[m
       "version": "1.0.4",[m
       "resolved": "https://registry.npmjs.org/is-arguments/-/is-arguments-1.0.4.tgz",[m
[31m-      "integrity": "sha512-xPh0Rmt8NE65sNzvyUmWgI1tz3mKq74lGA0mL8LYZcoIzKOzDh6HmrYm3d18k60nHerC8A9Km8kYu87zfSFnLA==",[m
[31m-      "dev": true[m
[32m+[m[32m      "integrity": "sha512-xPh0Rmt8NE65sNzvyUmWgI1tz3mKq74lGA0mL8LYZcoIzKOzDh6HmrYm3d18k60nHerC8A9Km8kYu87zfSFnLA=="[m
     },[m
     "is-arrayish": {[m
       "version": "0.2.1",[m
[36m@@ -4928,8 +4976,7 @@[m
     "is-date-object": {[m
       "version": "1.0.1",[m
       "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.1.tgz",[m
[31m-      "integrity": "sha1-mqIOtq7rv/d/vTPnTKAbM1gdOhY=",[m
[31m-      "dev": true[m
[32m+[m[32m      "integrity": "sha1-mqIOtq7rv/d/vTPnTKAbM1gdOhY="[m
     },[m
     "is-descriptor": {[m
       "version": "0.1.6",[m
[36m@@ -5047,7 +5094,6 @@[m
       "version": "1.0.4",[m
       "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.0.4.tgz",[m
       "integrity": "sha1-VRdIm1RwkbCTDglWVM7SXul+lJE=",[m
[31m-      "dev": true,[m
       "requires": {[m
         "has": "^1.0.1"[m
       }[m
[36m@@ -5472,6 +5518,11 @@[m
         "set-immediate-shim": "~1.0.1"[m
       }[m
     },[m
[32m+[m[32m    "jwt-decode": {[m
[32m+[m[32m      "version": "2.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/jwt-decode/-/jwt-decode-2.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-fYa9VmefWM5qhHBKZX3TkruoGnk="[m
[32m+[m[32m    },[m
     "karma": {[m
       "version": "4.1.0",[m
       "resolved": "https://registry.npmjs.org/karma/-/karma-4.1.0.tgz",[m
[36m@@ -6360,8 +6411,7 @@[m
     "lodash": {[m
       "version": "4.17.15",[m
       "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.15.tgz",[m
[31m-      "integrity": "sha512-8xOcRHvCjnocdS5cpwXQXVzmmh5e5+saE2QGoeQmbKmRS6J3VQppPOIt0MnmE+4xlZoumy0GPG0D0MVIQbNA1A==",[m
[31m-      "dev": true[m
[32m+[m[32m      "integrity": "sha512-8xOcRHvCjnocdS5cpwXQXVzmmh5e5+saE2QGoeQmbKmRS6J3VQppPOIt0MnmE+4xlZoumy0GPG0D0MVIQbNA1A=="[m
     },[m
     "lodash.clonedeep": {[m
       "version": "4.5.0",[m
[36m@@ -7218,14 +7268,12 @@[m
     "object-is": {[m
       "version": "1.0.1",[m
       "resolved": "https://registry.npmjs.org/object-is/-/object-is-1.0.1.tgz",[m
[31m-      "integrity": "sha1-CqYOyZiaCz7Xlc9NBvYs8a1lObY=",[m
[31m-      "dev": true[m
[32m+[m[32m      "integrity": "sha1-CqYOyZiaCz7Xlc9NBvYs8a1lObY="[m
     },[m
     "object-keys": {[m
       "version": "1.1.1",[m
       "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",[m
[31m-      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",[m
[31m-      "dev": true[m
[32m+[m[32m      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA=="[m
     },[m
     "object-visit": {[m
       "version": "1.0.1",[m
[36m@@ -7526,6 +7574,11 @@[m
         "readable-stream": "^2.1.5"[m
       }[m
     },[m
[32m+[m[32m    "parchment": {[m
[32m+[m[32m      "version": "1.1.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/parchment/-/parchment-1.1.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-J5FBQt/pM2inLzg4hEWmzQx/8h8D0CiDxaG3vyp9rKrQRSDgBlhjdP5jQGgosEajXPSQouXGHOmVdgo7QmJuOg=="[m
[32m+[m[32m    },[m
     "parse-asn1": {[m
       "version": "5.1.5",[m
       "resolved": "https://registry.npmjs.org/parse-asn1/-/parse-asn1-5.1.5.tgz",[m
[36m@@ -7822,6 +7875,11 @@[m
       "integrity": "sha1-1PRWKwzjaW5BrFLQ4ALlemNdxtw=",[m
       "dev": true[m
     },[m
[32m+[m[32m    "primeng": {[m
[32m+[m[32m      "version": "9.0.0-rc.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/primeng/-/primeng-9.0.0-rc.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-gJkr5cDYiSH8u3PGJLaUlZpu8ZpTF7tve3swV/0W1jymTFGnWQYirs1emQev6k/O3U2nRBvNp2llPu+0FpDlJw=="[m
[32m+[m[32m    },[m
     "process": {[m
       "version": "0.11.10",[m
       "resolved": "https://registry.npmjs.org/process/-/process-0.11.10.tgz",[m
[36m@@ -8153,6 +8211,36 @@[m
       "integrity": "sha512-w7fLxIRCRT7U8Qu53jQnJyPkYZIaR4n5151KMfcJlO/A9397Wxb1amJvROTK6TOnp7PfoAmg/qXiNHI+08jRfA==",[m
       "dev": true[m
     },[m
[32m+[m[32m    "quill": {[m
[32m+[m[32m      "version": "1.3.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/quill/-/quill-1.3.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-hG/DVzh/TiknWtE6QmWAF/pxoZKYxfe3J/d/+ShUWkDvvkZQVTPeVmUJVu1uE6DDooC4fWTiCLh84ul89oNz5g==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "clone": "^2.1.1",[m
[32m+[m[32m        "deep-equal": "^1.0.1",[m
[32m+[m[32m        "eventemitter3": "^2.0.3",[m
[32m+[m[32m        "extend": "^3.0.2",[m
[32m+[m[32m        "parchment": "^1.1.4",[m
[32m+[m[32m        "quill-delta": "^3.6.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "eventemitter3": {[m
[32m+[m[32m          "version": "2.0.3",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-2.0.3.tgz",[m
[32m+[m[32m          "integrity": "sha1-teEHm1n7XhuidxwKmTvgYKWMmbo="[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "quill-delta": {[m
[32m+[m[32m      "version": "3.6.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/quill-delta/-/quill-delta-3.6.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-wdIGBlcX13tCHOXGMVnnTVFtGRLoP0imqxM696fIPwIf5ODIYUHIvHbZcyvGlZFiFhK5XzDC2lpjbxRhnM05Tg==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "deep-equal": "^1.0.1",[m
[32m+[m[32m        "extend": "^3.0.2",[m
[32m+[m[32m        "fast-diff": "1.1.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "randombytes": {[m
       "version": "2.1.0",[m
       "resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",[m
[36m@@ -8317,7 +8405,6 @@[m
       "version": "1.2.0",[m
       "resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.2.0.tgz",[m
       "integrity": "sha512-ztaw4M1VqgMwl9HlPpOuiYgItcHlunW0He2fE6eNfT6E/CF2FtYi9ofOYe4mKntstYk0Fyh/rDRBdS3AnxjlrA==",[m
[31m-      "dev": true,[m
       "requires": {[m
         "define-properties": "^1.1.2"[m
       }[m
[1mdiff --git a/package.json b/package.json[m
[1mindex 467979d..576a883 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -12,13 +12,24 @@[m
   "private": true,[m
   "dependencies": {[m
     "@angular/animations": "~8.2.0",[m
[32m+[m[32m    "@angular/cdk": "~8.2.3",[m
     "@angular/common": "~8.2.0",[m
     "@angular/compiler": "~8.2.0",[m
     "@angular/core": "~8.2.0",[m
     "@angular/forms": "~8.2.0",[m
[32m+[m[32m    "@angular/material": "^8.2.3",[m
     "@angular/platform-browser": "~8.2.0",[m
     "@angular/platform-browser-dynamic": "~8.2.0",[m
     "@angular/router": "~8.2.0",[m
[32m+[m[32m    "@ngrx/effects": "^8.6.0",[m
[32m+[m[32m    "@ngrx/entity": "^8.6.0",[m
[32m+[m[32m    "@ngrx/store": "^8.6.0",[m
[32m+[m[32m    "@types/lodash": "^4.14.149",[m
[32m+[m[32m    "hammerjs": "^2.0.8",[m
[32m+[m[32m    "jwt-decode": "^2.2.0",[m
[32m+[m[32m    "lodash": "^4.17.15",[m
[32m+[m[32m    "primeng": "^9.0.0-rc.1",[m
[32m+[m[32m    "quill": "^1.3.7",[m
     "rxjs": "~6.4.0",[m
     "tslib": "^1.10.0",[m
     "zone.js": "~0.9.1"[m
[1mdiff --git a/src/app/app-routing.module.ts b/src/app/app-routing.module.ts[m
[1mindex 06c7342..b3bc51d 100644[m
[1m--- a/src/app/app-routing.module.ts[m
[1m+++ b/src/app/app-routing.module.ts[m
[36m@@ -1,8 +1,26 @@[m
 import { NgModule } from '@angular/core';[m
 import { Routes, RouterModule } from '@angular/router';[m
 [m
[32m+[m[32mimport { LoginComponent } from './login/login.component';[m
[32m+[m[32mimport { HomeComponent } from './pages/home/home.component';[m
[32m+[m[32mimport { ArticleDetailComponent } from './pages/article-detail/article-detail.component';[m
[32m+[m[32mimport { TagDetailComponent } from './pages/tag-detail/tag-detail.component';[m
[32m+[m[32mimport { BookmarksComponent } from './pages/bookmarks/bookmarks.component';[m
[32m+[m[32mimport { SearchComponent } from './pages/search/search.component';[m
[32m+[m[32mimport { RegistrationComponent } from './pages/registration/registration.component';[m
 [m
[31m-const routes: Routes = [];[m
[32m+[m[32mconst loadAdmin = () => import('./admin/admin.module').then(m => m.AdminModule);[m
[32m+[m
[32m+[m[32mconst routes: Routes = [[m
[32m+[m[32m  { path: '', pathMatch: 'full', component: HomeComponent },[m
[32m+[m[32m  { path: 'login', component: LoginComponent },[m
[32m+[m[32m  { path: 'admin', loadChildren: loadAdmin },[m
[32m+[m[32m  { path: 'articles/:id', component: ArticleDetailComponent },[m
[32m+[m[32m  { path: 'tags/:name', component: TagDetailComponent },[m
[32m+[m[32m  { path: 'bookmarks', component: BookmarksComponent },[m
[32m+[m[32m  { path: 'search', component: SearchComponent },[m
[32m+[m[32m  { path: 'register', component: RegistrationComponent },[m
[32m+[m[32m];[m
 [m
 @NgModule({[m
   imports: [RouterModule.forRoot(routes)],[m
[1mdiff --git a/src/app/app.component.html b/src/app/app.component.html[m
[1mindex 0f3d9d8..1e15754 100644[m
[1m--- a/src/app/app.component.html[m
[1m+++ b/src/app/app.component.html[m
[36m@@ -1,21 +1,2 @@[m
[31m-<!--The content below is only a placeholder and can be replaced.-->[m
[31m-<div style="text-align:center">[m
[31m-  <h1>[m
[31m-    Welcome to {{ title }}![m
[31m-  </h1>[m
[31m-  <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">[m
[31m-</div>[m
[31m-<h2>Here are some links to help you start: </h2>[m
[31m-<ul>[m
[31m-  <li>[m
[31m-    <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>[m
[31m-  </li>[m
[31m-  <li>[m
[31m-    <h2><a target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a></h2>[m
[31m-  </li>[m
[31m-  <li>[m
[31m-    <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>[m
[31m-  </li>[m
[31m-</ul>[m
[31m-[m
[32m+[m[32m<app-header></app-header>[m
 <router-outlet></router-outlet>[m
[1mdiff --git a/src/app/app.component.ts b/src/app/app.component.ts[m
[1mindex 96a5420..47b5d69 100644[m
[1m--- a/src/app/app.component.ts[m
[1m+++ b/src/app/app.component.ts[m
[36m@@ -1,10 +1,20 @@[m
[31m-import { Component } from '@angular/core';[m
[32m+[m[32mimport { Component, OnInit } from '@angular/core';[m
[32m+[m[32mimport { Store } from '@ngrx/store';[m
[32m+[m[32mimport { appLoaded } from './state/actions';[m
 [m
 @Component({[m
   selector: 'app-root',[m
   templateUrl: './app.component.html',[m
   styleUrls: ['./app.component.scss'][m
 })[m
[31m-export class AppComponent {[m
[32m+[m[32mexport class AppComponent implements OnInit {[m
   title = 'gitam-web';[m
[32m+[m
[32m+[m[32m  constructor([m
[32m+[m[32m    private readonly store: Store<any>,[m
[32m+[m[32m  ) {}[m
[32m+[m
[32m+[m[32m  ngOnInit() {[m
[32m+[m[32m    this.store.dispatch(appLoaded());[m
[32m+[m[32m  }[m
 }[m
[1mdiff --git a/src/app/app.module.ts b/src/app/app.module.ts[m
[1mindex 2c3ba29..5069269 100644[m
[1m--- a/src/app/app.module.ts[m
[1m+++ b/src/app/app.module.ts[m
[36m@@ -1,18 +1,68 @@[m
 import { BrowserModule } from '@angular/platform-browser';[m
 import { NgModule } from '@angular/core';[m
[32m+[m[32mimport { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';[m
[32m+[m[32mimport { StoreModule } from '@ngrx/store';[m
[32m+[m[32mimport { EffectsModule } from '@ngrx/effects';[m
 [m
 import { AppRoutingModule } from './app-routing.module';[m
 import { AppComponent } from './app.component';[m
[32m+[m[32mimport { BrowserAnimationsModule } from '@angular/platform-browser/animations';[m
[32m+[m[32mimport { TokenInterceptor } from './common/services/token.interceptor';[m
[32m+[m[32mimport { LoginComponent } from './login/login.component';[m
[32m+[m[32mimport { MatCardModule, MatButtonModule, MatInputModule, MatIconModule, MatSnackBarModule, MatTooltipModule, MatProgressSpinnerModule } from '@angular/material';[m
[32m+[m[32mimport { ReactiveFormsModule } from '@angular/forms';[m
[32m+[m[32mimport { CommonModule } from './common/common.module';[m
[32m+[m[32mimport { HomeComponent } from './pages/home/home.component';[m
[32m+[m[32mimport { ArticleDetailComponent } from './pages/article-detail/article-detail.component';[m
[32m+[m[32mimport { TagDetailComponent } from './pages/tag-detail/tag-detail.component';[m
[32m+[m[32mimport { BookmarksComponent } from './pages/bookmarks/bookmarks.component';[m
[32m+[m[32mimport { SearchComponent } from './pages/search/search.component';[m
[32m+[m[32mimport { authReducer, bookmarksReducer, articlesReducer, finishLoadingReducer, searchResultsReducer, articlesByTagReducer } from './state/reducers';[m
[32m+[m[32mimport { BookmarksEffects } from './state/effects/bookmarks.effect';[m
[32m+[m[32mimport { AppEffects } from './state/effects/app.effects';[m
[32m+[m[32mimport { AuthEffects } from './state/effects/auth.effects';[m
[32m+[m[32mimport { MessagesEffects } from './state/effects/messages.effects';[m
[32m+[m[32mimport { ArticlesEffects } from './state/effects/articles.effects';[m
[32m+[m[32mimport { RegistrationComponent } from './pages/registration/registration.component';[m
 [m
 @NgModule({[m
   declarations: [[m
[31m-    AppComponent[m
[32m+[m[32m    AppComponent,[m
[32m+[m[32m    LoginComponent,[m
[32m+[m[32m    HomeComponent,[m
[32m+[m[32m    ArticleDetailComponent,[m
[32m+[m[32m    TagDetailComponent,[m
[32m+[m[32m    BookmarksComponent,[m
[32m+[m[32m    SearchComponent,[m
[32m+[m[32m    RegistrationComponent[m
   ],[m
   imports: [[m
     BrowserModule,[m
[31m-    AppRoutingModule[m
[32m+[m[32m    ReactiveFormsModule,[m
[32m+[m[32m    HttpClientModule,[m
[32m+[m[32m    AppRoutingModule,[m
[32m+[m[32m    BrowserAnimationsModule,[m
[32m+[m[32m    MatCardModule,[m
[32m+[m[32m    MatButtonModule,[m
[32m+[m[32m    MatInputModule,[m
[32m+[m[32m    MatIconModule,[m
[32m+[m[32m    MatSnackBarModule,[m
[32m+[m[32m    MatTooltipModule,[m
[32m+[m[32m    MatProgressSpinnerModule,[m
[32m+[m[32m    CommonModule,[m
[32m+[m[32m    StoreModule.forRoot({[m
[32m+[m[32m      isAuth: authReducer,[m
[32m+[m[32m      bookmarks: bookmarksReducer,[m
[32m+[m[32m      articles: articlesReducer,[m
[32m+[m[32m      finishLoading: finishLoadingReducer,[m
[32m+[m[32m      searchResults: searchResultsReducer,[m
[32m+[m[32m      articlesByTag: articlesByTagReducer,[m
[32m+[m[32m    }),[m
[32m+[m[32m    EffectsModule.forRoot([AppEffects, AuthEffects, BookmarksEffects, ArticlesEffects, MessagesEffects]),[m
[32m+[m[32m  ],[m
[32m+[m[32m  providers: [[m
[32m+[m[32m    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },[m
   ],[m
[31m-  providers: [],[m
   bootstrap: [AppComponent][m
 })[m
 export class AppModule { }[m
[1mdiff --git a/src/environments/environment.prod.ts b/src/environments/environment.prod.ts[m
[1mindex 3612073..a1d63d3 100644[m
[1m--- a/src/environments/environment.prod.ts[m
[1m+++ b/src/environments/environment.prod.ts[m
[36m@@ -1,3 +1,4 @@[m
 export const environment = {[m
[31m-  production: true[m
[32m+[m[32m  production: true,[m
[32m+[m[32m  baseUrl: 'http://gitam-web.herokuapp.com/',[m
 };[m
[1mdiff --git a/src/environments/environment.ts b/src/environments/environment.ts[m
[1mindex 7b4f817..3a8fb6d 100644[m
[1m--- a/src/environments/environment.ts[m
[1m+++ b/src/environments/environment.ts[m
[36m@@ -3,7 +3,8 @@[m
 // The list of file replacements can be found in `angular.json`.[m
 [m
 export const environment = {[m
[31m-  production: false[m
[32m+[m[32m  production: false,[m
[32m+[m[32m  baseUrl: 'http://localhost:3000/',[m
 };[m
 [m
 /*[m
[1mdiff --git a/src/index.html b/src/index.html[m
[1mindex d219371..27eb232 100644[m
[1m--- a/src/index.html[m
[1m+++ b/src/index.html[m
[36m@@ -7,6 +7,8 @@[m
 [m
   <meta name="viewport" content="width=device-width, initial-scale=1">[m
   <link rel="icon" type="image/x-icon" href="favicon.ico">[m
[32m+[m[32m  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet">[m
[32m+[m[32m  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">[m
 </head>[m
 <body>[m
   <app-root></app-root>[m
[1mdiff --git a/src/main.ts b/src/main.ts[m
[1mindex c7b673c..3b2b7d0 100644[m
[1m--- a/src/main.ts[m
[1m+++ b/src/main.ts[m
[36m@@ -1,3 +1,4 @@[m
[32m+[m[32mimport 'hammerjs';[m
 import { enableProdMode } from '@angular/core';[m
 import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';[m
 [m
[1mdiff --git a/src/styles.scss b/src/styles.scss[m
[1mindex 90d4ee0..2b02bb1 100644[m
[1m--- a/src/styles.scss[m
[1m+++ b/src/styles.scss[m
[36m@@ -1 +1,10 @@[m
 /* You can add global styles to this file, and also import other style files */[m
[32m+[m
[32m+[m[32mhtml, body { height: 100%; }[m
[32m+[m[32mbody { margin: 0; font-family: Roboto, "Helvetica Neue", sans-serif; }[m
[32m+[m
[32m+[m[32m.centered {[m
[32m+[m[32m  margin: auto;[m
[32m+[m[32m  margin-top: 20px;[m
[32m+[m[32m  width: 60%;[m
[32m+[m[32m}[m
