import{Box3 as e,BoxGeometry as t,BufferAttribute as n,BufferGeometry as r,CanvasTexture as i,CatmullRomCurve3 as a,Color as o,ColorManagement as s,ConeGeometry as c,CylinderGeometry as l,DataTexture as u,DepthStencilFormat as d,DepthTexture as f,DirectionalLight as p,Euler as m,Float32BufferAttribute as h,Fog as g,Group as _,HalfFloatType as v,HemisphereLight as y,InstancedMesh as b,LinearSRGBColorSpace as x,Matrix4 as S,Mesh as C,MeshBasicMaterial as w,MeshDepthMaterial as T,MeshLambertMaterial as E,MeshNormalMaterial as D,MeshStandardMaterial as O,NearestFilter as k,Object3D as ee,OrthographicCamera as A,PMREMGenerator as te,PerspectiveCamera as ne,PlaneGeometry as j,PointLight as re,Quaternion as ie,RGBADepthPacking as ae,RGBAFormat as oe,RawShaderMaterial as se,RepeatWrapping as ce,SRGBColorSpace as le,Scene as ue,ShaderMaterial as M,SphereGeometry as de,Timer as fe,UniformsUtils as N,UnsignedByteType as pe,UnsignedInt248Type as me,Vector2 as P,Vector3 as F,WebGLRenderTarget as he,WebGLRenderer as ge}from"./three.module-CeVBJVoU.js";function _e(e,t=!1){let n=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),a=new Set(Object.keys(e[0].morphAttributes)),o={},s={},c=e[0].morphTargetsRelative,l=new r;l.morphTargetsRelative=c;let u=0;for(let r=0;r<e.length;++r){let d=e[r],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+r+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+r+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.attributes[e]),f++}if(f!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+r+`. Make sure all geometries have the same number of attributes.`),null;if(c!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+r+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!a.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+r+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+r+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;s[t]===void 0&&(s[t]=[]),s[t].push(d.morphAttributes[t]),p++}if(p!==a.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+r+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+r+`. The geometry must have either an index or a position attribute`),null;l.addGroup(u,e,r),u+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}l.setIndex(n)}for(let e in o){let t=I(o[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;l.setAttribute(e,t)}for(let e in s){let t=s[e][0].length;if(t!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<s[e].length;++r)t.push(s[e][r][n]);let r=I(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;l.morphAttributes[e].push(r)}}}return l}function I(e){let t,r,i,a=-1,o=0;for(let n=0;n<e.length;++n){let s=e[n];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(r===void 0&&(r=s.itemSize),r!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(i===void 0&&(i=s.normalized),i!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(a===-1&&(a=s.gpuType),a!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;o+=s.count*r}let s=new t(o),c=new n(s,r,i),l=0;for(let t=0;t<e.length;++t){let n=e[t];if(n.isInterleavedBufferAttribute){let e=l/r;for(let t=0,i=n.count;t<i;t++)for(let i=0;i<r;i++){let r=n.getComponent(t,i);c.setComponent(t+e,i,r)}}else s.set(n.array,l);l+=n.count*r}return a!==void 0&&(c.gpuType=a),c}var ve=class extends ue{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new t;e.deleteAttribute(`uv`);let n=new O({side:1}),r=new O,i=new re(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let a=new C(e,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let o=new b(e,r,6),s=new ee;s.position.set(-10.906,2.009,1.846),s.rotation.set(0,-.195,0),s.scale.set(2.328,7.905,4.651),s.updateMatrix(),o.setMatrixAt(0,s.matrix),s.position.set(-5.607,-.754,-.758),s.rotation.set(0,.994,0),s.scale.set(1.97,1.534,3.955),s.updateMatrix(),o.setMatrixAt(1,s.matrix),s.position.set(6.167,.857,7.803),s.rotation.set(0,.561,0),s.scale.set(3.927,6.285,3.687),s.updateMatrix(),o.setMatrixAt(2,s.matrix),s.position.set(-2.017,.018,6.124),s.rotation.set(0,.333,0),s.scale.set(2.002,4.566,2.064),s.updateMatrix(),o.setMatrixAt(3,s.matrix),s.position.set(2.291,-.756,-2.621),s.rotation.set(0,-.286,0),s.scale.set(1.546,1.552,1.496),s.updateMatrix(),o.setMatrixAt(4,s.matrix),s.position.set(-2.193,-.369,-5.547),s.rotation.set(0,.516,0),s.scale.set(3.875,3.487,2.986),s.updateMatrix(),o.setMatrixAt(5,s.matrix),this.add(o);let c=new C(e,ye(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new C(e,ye(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new C(e,ye(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new C(e,ye(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new C(e,ye(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new C(e,ye(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ye(e){return new E({color:0,emissive:16777215,emissiveIntensity:e})}var L={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},be=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},R=new A(-1,1,1,-1,0,1),xe=new class extends r{constructor(){super(),this.setAttribute(`position`,new h([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new h([0,2,0,0,2,0],2))}},z=class{constructor(e){this._mesh=new C(xe,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,R)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Se=class extends be{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof M?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=N.clone(e.uniforms),this.material=new M({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new z(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},B=class extends be{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},V=class extends be{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Ce=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new P);this._width=n.width,this._height=n.height,t=new he(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:v}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Se(L),this.copyPass.material.blending=0,this.timer=new fe}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}B!==void 0&&(r instanceof B?n=!0:r instanceof V&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new P);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},we=class extends be{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new o}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Te={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new P},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new S},cameraProjectionMatrixInverse:{value:new S},cameraWorldMatrix:{value:new S},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new F(-1,-1,-1)},sceneBoxMax:{value:new F(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				#if PERSPECTIVE_CAMERA == 1
					vec3 viewDir = normalize(-viewPos.xyz);
				#else
					vec3 viewDir = vec3(0., 0., 1.);
				#endif
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ee={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},De={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Oe(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=ke(t),r=n.length,i=new Uint8Array(r*4);for(let e=0;e<r;++e){let t=n[e],a=2*Math.PI*t/r,o=new F(Math.cos(a),Math.sin(a),0).normalize();i[e*4]=(o.x*.5+.5)*255,i[e*4+1]=(o.y*.5+.5)*255,i[e*4+2]=127,i[e*4+3]=255}let a=new u(i,t,t);return a.wrapS=ce,a.wrapT=ce,a.needsUpdate=!0,a}function ke(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;)i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]===0?(r[i*t+a]=e++,a++,i--):(a-=2,i++);return r}var H={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:Ae(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new P},cameraProjectionMatrixInverse:{value:new S},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Ae(e,t,n){let r=U(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function U(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new F(Math.cos(a),Math.sin(a),o))}return r}var je=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,k=_-C+2*d,ee=v-w+2*d,A=g-1+3*d,te=_-1+3*d,ne=v-1+3*d,j=c&255,re=l&255,ie=u&255,ae=this.perm[j+this.perm[re+this.perm[ie]]]%12,oe=this.perm[j+y+this.perm[re+b+this.perm[ie+x]]]%12,se=this.perm[j+S+this.perm[re+C+this.perm[ie+w]]]%12,ce=this.perm[j+1+this.perm[re+1+this.perm[ie+1]]]%12,le=.6-g*g-_*_-v*v;le<0?r=0:(le*=le,r=le*le*this._dot3(this.grad3[ae],g,_,v));let ue=.6-T*T-E*E-D*D;ue<0?i=0:(ue*=ue,i=ue*ue*this._dot3(this.grad3[oe],T,E,D));let M=.6-O*O-k*k-ee*ee;M<0?a=0:(M*=M,a=M*M*this._dot3(this.grad3[se],O,k,ee));let de=.6-A*A-te*te-ne*ne;return de<0?o=0:(de*=de,o=de*de*this._dot3(this.grad3[ce],A,te,ne)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,k=w>E?16:0,ee=T>E?8:0,A=w>D?4:0,te=T>D?2:0,ne=+(E>D),j=O+k+ee+A+te+ne,re=+(a[j][0]>=3),ie=+(a[j][1]>=3),ae=+(a[j][2]>=3),oe=+(a[j][3]>=3),se=+(a[j][0]>=2),ce=+(a[j][1]>=2),le=+(a[j][2]>=2),ue=+(a[j][3]>=2),M=+(a[j][0]>=1),de=+(a[j][1]>=1),fe=+(a[j][2]>=1),N=+(a[j][3]>=1),pe=w-re+c,me=T-ie+c,P=E-ae+c,F=D-oe+c,he=w-se+2*c,ge=T-ce+2*c,_e=E-le+2*c,I=D-ue+2*c,ve=w-M+3*c,ye=T-de+3*c,L=E-fe+3*c,be=D-N+3*c,R=w-1+4*c,xe=T-1+4*c,z=E-1+4*c,Se=D-1+4*c,B=h&255,V=g&255,Ce=_&255,we=v&255,Te=o[B+o[V+o[Ce+o[we]]]]%32,Ee=o[B+re+o[V+ie+o[Ce+ae+o[we+oe]]]]%32,De=o[B+se+o[V+ce+o[Ce+le+o[we+ue]]]]%32,Oe=o[B+M+o[V+de+o[Ce+fe+o[we+N]]]]%32,ke=o[B+1+o[V+1+o[Ce+1+o[we+1]]]]%32,H=.6-w*w-T*T-E*E-D*D;H<0?l=0:(H*=H,l=H*H*this._dot4(i[Te],w,T,E,D));let Ae=.6-pe*pe-me*me-P*P-F*F;Ae<0?u=0:(Ae*=Ae,u=Ae*Ae*this._dot4(i[Ee],pe,me,P,F));let U=.6-he*he-ge*ge-_e*_e-I*I;U<0?d=0:(U*=U,d=U*U*this._dot4(i[De],he,ge,_e,I));let je=.6-ve*ve-ye*ye-L*L-be*be;je<0?f=0:(je*=je,f=je*je*this._dot4(i[Oe],ve,ye,L,be));let Me=.6-R*R-xe*xe-z*z-Se*Se;return Me<0?p=0:(Me*=Me,p=Me*Me*this._dot4(i[ke],R,xe,z,Se)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},Me=class e extends be{constructor(e,t,n=512,r=512,i,a,s){super(),this.width=n,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Oe(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new he(this.width,this.height,{type:v,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new M({defines:Object.assign({},Te.defines),uniforms:N.clone(Te.uniforms),vertexShader:Te.vertexShader,fragmentShader:Te.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new D,this.normalMaterial.blending=0,this.pdMaterial=new M({defines:Object.assign({},H.defines),uniforms:N.clone(H.uniforms),vertexShader:H.vertexShader,fragmentShader:H.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new M({defines:Object.assign({},Ee.defines),uniforms:N.clone(Ee.uniforms),vertexShader:Ee.vertexShader,fragmentShader:Ee.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new M({uniforms:N.clone(L.uniforms),vertexShader:L.vertexShader,fragmentShader:L.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new M({uniforms:N.clone(De.uniforms),vertexShader:De.vertexShader,fragmentShader:De.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new z(null),this._originalClearColor=new o,this.setGBuffer(i?i.depthTexture:void 0,i?i.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),s!==void 0&&this.updatePdMaterial(s)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let e=new f;e.format=d,e.type=me,this.normalRenderTarget=new he(this.width,this.height,{minFilter:k,magFilter:k,type:v,depthTexture:e})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=+!!this.normalTexture;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ae(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case e.OUTPUT.Off:break;case e.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new je,n=e*e*4,r=new Uint8Array(n);for(let n=0;n<e;n++)for(let i=0;i<e;i++){let a=n,o=i;r[(n*e+i)*4]=(t.noise(a,o)*.5+.5)*255,r[(n*e+i)*4+1]=(t.noise(a+e,o)*.5+.5)*255,r[(n*e+i)*4+2]=(t.noise(a,o+e)*.5+.5)*255,r[(n*e+i)*4+3]=(t.noise(a+e,o+e)*.5+.5)*255}let i=new u(r,e,e,oe,pe);return i.wrapS=ce,i.wrapT=ce,i.needsUpdate=!0,i}};Me.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Ne={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new o(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Pe=class e extends be{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new P(256,256):new P(e.x,e.y),this.clearColor=new o(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new he(i,a,{type:v,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new he(i,a,{type:v,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new he(i,a,{type:v,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let s=Ne;this.highPassUniforms=N.clone(s.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new M({uniforms:this.highPassUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new P(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=N.clone(L.uniforms),this.blendMaterial=new M({uniforms:this.copyUniforms,vertexShader:L.vertexShader,fragmentShader:L.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new o,this._oldClearAlpha=1,this._basic=new w,this._fsQuad=new z(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new P(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new M({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new P(.5,.5)},direction:{value:new P(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new M({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Pe.BlurDirectionX=new P(1,0),Pe.BlurDirectionY=new P(0,1);var Fe={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Ie=class extends be{constructor(){super(),this.isOutputPass=!0,this.uniforms=N.clone(Fe.uniforms),this.material=new se({name:Fe.name,uniforms:this.uniforms,vertexShader:Fe.vertexShader,fragmentShader:Fe.fragmentShader}),this._fsQuad=new z(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},s.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Le=new F;function W(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;Le.copy(t),Le[r]=0,Le.normalize();let l=.5*o/(o+s),u=1-Le.angleTo(e)/c;return Math.sign(Le[n])===1?u*l:s/(o+s)+l+l*(1-u)}var Re=class e extends t{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new F,c=new F,l=new F(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new F,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=W(m,c,`z`,`y`,i,n),f[a+1]=1-W(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-W(m,c,`z`,`y`,i,n),f[a+1]=1-W(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-W(m,c,`x`,`z`,i,e),f[a+1]=W(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-W(m,c,`x`,`z`,i,e),f[a+1]=1-W(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-W(m,c,`x`,`y`,i,e),f[a+1]=1-W(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=W(m,c,`x`,`y`,i,e),f[a+1]=1-W(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},ze=e=>Math.min(Math.max(e,0),1),G=(e,t,n)=>ze((e-t)/(n-t)),Be=e=>(e=ze(e),e*e*e*(e*(e*6-15)+10)),K=(e,t,n)=>e+(t-e)*n,q=2.97,J=3.25,Y=4.96,Ve=5.5,X=-12.5,Z=(e,t,n,r,i=[],a=!0)=>({a:e,b:t,y0:n,y1:r,t:a?.3:.14,ext:a,ops:i}),He=[Z([-5.6,0],[-2.2,0],0,q,[{u0:.52,u1:1.9,v0:.9,v1:2.25,mull:1},{u0:2.25,u1:2.65,v0:1.84,v1:2.25}]),Z([-2.2,0],[-2.2,-1.2],0,Ve),Z([-2.2,-1.2],[-.38,-1.2],0,Ve,[{u0:.38,u1:1.7,v0:0,v1:2.46,door:!0},{u0:.45,u1:1.7,v0:3.13,v1:4.45,mull:1}]),Z([-.38,-1.2],[-.38,0],0,Ve),Z([-.38,0],[1.78,0],0,Ve,[{u0:.51,u1:1.48,v0:1.9,v1:4.87,tran:4.3},{u0:.52,u1:1.42,v0:.14,v1:1.04}]),Z([1.78,0],[5.6,0],0,q,[{u0:.25,u1:3.3,v0:.76,v1:2.37,mull:2}]),Z([5.6,0],[5.6,X],0,q,[{u0:2.2,u1:4,v0:.9,v1:2.25,mull:1},{u0:8,u1:10.6,v0:.9,v1:2.25,mull:1}]),Z([5.6,X],[-5.6,X],0,q,[{u0:2.4,u1:7.6,v0:0,v1:2.4,mull:3,door:!0},{u0:8.6,u1:10.2,v0:.9,v1:2.25}]),Z([-5.6,X],[-5.6,0],0,q,[{u0:3,u1:5.4,v0:.9,v1:2.25,mull:1},{u0:8.4,u1:10.4,v0:.9,v1:2.25,mull:1}]),Z([-5.4,0],[-2.2,0],J,Y,[{u0:1.5,u1:2.45,v0:3.18,v1:4.45}]),Z([1.78,0],[5.17,0],J,Y,[{u0:1.14,u1:3.01,v0:3.18,v1:4.36,mull:1}]),Z([5.17,0],[5.17,X],J,Y,[{u0:3,u1:4.6,v0:3.4,v1:4.4},{u0:8.4,u1:10.4,v0:3.4,v1:4.4,mull:1}]),Z([5.17,X],[-5.4,X],J,Y,[{u0:1.6,u1:3.6,v0:3.4,v1:4.4,mull:1},{u0:6.4,u1:8.6,v0:3.4,v1:4.4,mull:1}]),Z([-5.4,X],[-5.4,0],J,Y,[{u0:2.4,u1:4,v0:3.4,v1:4.4},{u0:8.6,u1:10.2,v0:3.4,v1:4.4}]),Z([-2.2,-1.2],[-2.2,-6.6],0,q,[{u0:2.2,u1:3.1,v0:0,v1:2.1,door:!0}],!1),Z([-5.6,-6.6],[-.4,-6.6],0,q,[{u0:1.2,u1:3.4,v0:0,v1:2.4,door:!0}],!1),Z([1.78,0],[1.78,-4.6],0,q,[{u0:1.6,u1:3.4,v0:0,v1:2.4,door:!0}],!1),Z([1.78,-6.4],[5.6,-6.4],0,q,[{u0:.7,u1:2.9,v0:0,v1:2.4,door:!0}],!1),Z([-2.2,-4.6],[-.4,-4.6],0,q,[],!1),Z([-.4,-4.6],[-.4,-6.6],0,q,[{u0:.6,u1:1.4,v0:0,v1:2.1,door:!0}],!1),Z([-5.4,-6.2],[5.17,-6.2],J,Y,[{u0:1.4,u1:2.3,v0:J,v1:5.35,door:!0},{u0:7.6,u1:8.5,v0:J,v1:5.35,door:!0}],!1),Z([-2.2,-1.2],[-2.2,-6.2],J,Y,[{u0:3.4,u1:4.3,v0:J,v1:5.35,door:!0}],!1),Z([1.78,0],[1.78,-6.2],J,Y,[{u0:4.9,u1:5.8,v0:J,v1:5.35,door:!0}],!1),Z([.6,-6.2],[.6,X],J,Y,[],!1),Z([-5.4,-9.5],[-2,-9.5],J,Y,[{u0:2.2,u1:3,v0:J,v1:5.35,door:!0}],!1)],Ue={x0:-2.2,x1:1.78,z0:0,z1:-4.6},We=[[-6.65,-2.2,1,-13.5,Y,5.34],[-2.6,3,1.1,-13.6,Ve,5.89],[2.3,6.1,1,-13.5,Y,5.3]],Ge=[[-6.7,-2.8,1.1,-3,2.58,2.97],[1.65,6.6,1.1,-3,2.67,3.13],[-2.2,-.38,.4,-1.2,2.67,3.12]],Ke=[[`OFFICE`,-3.9,-3.4],[`FOYER`,-.3,-2.6],[`FAMILY`,3.7,-3],[`POWDER`,-1.3,-5.6],[`DINING`,-3.4,-9.6],[`KITCHEN`,2.4,-9.4],[`STAIR`,1.1,-6]],qe=11,Q=()=>(qe=qe*16807%2147483647,(qe-1)/2147483646);function Je(e,t,n,r=!0,a=!0){let o=document.createElement(`canvas`);o.width=e,o.height=t,n(o.getContext(`2d`));let s=new i(o);return a&&(s.wrapS=s.wrapT=ce),s.anisotropy=8,r&&(s.colorSpace=le),s}var Ye=(e,t,n,r,i,a=!1)=>{for(let o=0;o<r;o++)e.fillStyle=`rgba(${a?`255,255,255`:`0,0,0`},${(Q()*i).toFixed(3)})`,e.fillRect(Q()*t,Q()*n,1+Q()*2,1+Q()*2)},Xe=(e=0,t=.12)=>({k:{value:0},w:{value:t},mode:e,parts:new Map,meshes:[]}),Ze=e=>t=>{t.uniforms.uK=e.k,t.uniforms.uW=e.w,t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aOrder; attribute float aBase; uniform float uK; uniform float uW; varying float vG;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
      float g = clamp((uK - aOrder) / uW, 0.0, 1.0); g = g * g * (3.0 - 2.0 * g); vG = g;
      ${e.mode===0?`transformed.y = aBase + (transformed.y - aBase) * max(g, 0.0001);`:`transformed.y += (1.0 - g) * 0.9;`}`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vG;`).replace(`void main() {`,`void main() {
  if (vG < 0.002) discard;`)};function Qe(n){qe=11;let r=document.createElement(`canvas`);r.className=`hero-canvas`,r.setAttribute(`aria-hidden`,`true`),n.prepend(r);let i=innerWidth<768,s=new ge({canvas:r,antialias:i,powerPreference:`high-performance`});s.setPixelRatio(Math.min(devicePixelRatio,i?1.6:1.5)),s.toneMapping=7,s.toneMappingExposure=.95,s.shadowMap.enabled=!0,s.shadowMap.type=1;let u=new ue;u.environment=new te(s).fromScene(new ve,.04).texture,u.environmentIntensity=.3,u.fog=new g(1907999,55,130);let d=new ne(32,1,.3,4e3),f={uDay:{value:0},uDusk:{value:0},uFog:{value:new o}},E=new C(new de(2e3,32,16),new M({side:1,depthWrite:!1,fog:!1,uniforms:f,vertexShader:`varying vec3 vP; void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vP = normalize(wp.xyz - cameraPosition); gl_Position = projectionMatrix * viewMatrix * wp; }`,fragmentShader:`uniform float uDay, uDusk; uniform vec3 uFog; varying vec3 vP;
      void main(){
        float h = clamp(vP.y, -0.2, 1.0);
        vec3 studio = mix(vec3(0.0115), vec3(0.0075), smoothstep(0.0, 0.8, h));
        vec3 day = mix(vec3(0.45, 0.48, 0.52), vec3(0.20, 0.27, 0.38), smoothstep(0.0, 0.7, h));
        vec3 dusk = mix(mix(vec3(0.62, 0.48, 0.50), vec3(0.36, 0.35, 0.48), smoothstep(0.02, 0.25, h)), vec3(0.09, 0.11, 0.24), smoothstep(0.2, 0.9, h));
        vec3 c = mix(mix(studio, day, uDay), dusk, uDusk);
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        // three mixes fog after tone mapping and colour space, so the sky meets it there too: no horizon line
        gl_FragColor.rgb = mix(uFog, gl_FragColor.rgb, smoothstep(0.02, 0.3, h));
      }`}));u.add(E);let D=new y(`#dfe6ef`,`#3a352f`,.5);u.add(D);let k=new p(`#fff1de`,1.5);k.target.position.set(0,0,-6),u.add(k.target),k.castShadow=!0;let ee=i?2048:4096;k.shadow.mapSize.set(ee,ee),Object.assign(k.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:2,far:120}),k.shadow.bias=-3e-4,k.shadow.normalBias=.03,u.add(k);let A=(e,t={})=>new O({color:e,roughness:.8,...t}),re=Je(512,512,e=>{e.fillStyle=`#ffffff`,e.fillRect(0,0,512,512),Ye(e,512,512,14e3,.05),Ye(e,512,512,4e3,.18,!0)}),oe=Je(512,1024,e=>{e.fillStyle=`#8f9295`,e.fillRect(0,0,512,1024),Ye(e,512,1024,2e4,.1);for(let t=0;t<14;t++){e.strokeStyle=`rgba(240,240,236,${.25+Q()*.45})`,e.lineWidth=.6+Q()*1.6,e.beginPath();let t=Q()*512,n=Q()*1024;e.moveTo(t,n);for(let r=0;r<8;r++)t+=(Q()-.4)*90,n+=(Q()-.5)*160,e.lineTo(t,n);e.stroke()}e.fillStyle=`rgba(30,30,30,0.5)`;for(let t=0;t<1024;t+=170)e.fillRect(0,t,512,2)}),se=Je(512,512,e=>{for(let t=0;t<32;t++){let n=.85+Q()*.25;e.fillStyle=`rgb(${Math.round(150*n)},${Math.round(102*n)},${Math.round(66*n)})`,e.fillRect(0,t*16,512,16),e.fillStyle=`rgba(40,24,12,0.5)`,e.fillRect(0,t*16,512,1.5)}Ye(e,512,512,6e3,.08)}),ce=Je(256,1024,e=>{e.fillStyle=`#cdb894`,e.fillRect(0,0,256,1024);for(let t=0;t<60;t++){e.strokeStyle=`rgba(105,88,62,${.06+Q()*.1})`,e.lineWidth=1+Q()*2,e.beginPath();let t=Q()*256;e.moveTo(t,0),e.bezierCurveTo(t+(Q()-.5)*30,300,t+(Q()-.5)*30,700,t+(Q()-.5)*20,1024),e.stroke()}for(let t=0;t<3;t++)e.fillStyle=`rgba(100,82,58,0.35)`,e.beginPath(),e.ellipse(Q()*256,Q()*1024,6,10,0,0,7),e.fill()}),fe=Je(512,512,e=>{e.fillStyle=`#b9a888`,e.fillRect(0,0,512,512);for(let t=0;t<9e3;t++){let t=.9+Q()*.16;e.fillStyle=`rgba(${Math.round(182*t)},${Math.round(164*t)},${Math.round(128*t)},0.9)`,e.save(),e.translate(Q()*512,Q()*512),e.rotate(Q()*3),e.fillRect(-3,-1,6+Q()*3,2+Q()*1.5),e.restore()}e.strokeStyle=`rgba(90,72,48,.55)`,e.lineWidth=3,e.beginPath(),e.moveTo(0,1),e.lineTo(512,1),e.moveTo(0,257),e.lineTo(512,257),e.moveTo(1,0),e.lineTo(1,512),e.stroke()}),N=Je(512,512,e=>{e.fillStyle=`#a3a19c`,e.fillRect(0,0,512,512),Ye(e,512,512,16e3,.12),Ye(e,512,512,5e3,.12,!0)}),pe=Je(512,512,e=>{e.fillStyle=`#3a4036`,e.fillRect(0,0,512,512);for(let t=0;t<26e3;t++){let t=.7+Q()*.6;e.fillStyle=`rgba(${Math.round(60*t)},${Math.round(68*t)},${Math.round(56*t)},0.8)`,e.fillRect(Q()*512,Q()*512,1,2+Q()*3)}}),me=Je(512,512,e=>{e.fillStyle=`#4a4641`,e.fillRect(0,0,512,512),Ye(e,512,512,22e3,.2),Ye(e,512,512,6e3,.12,!0)});me.repeat.set(270,270);let I={card:A(`#f0eee9`,{roughness:1}),stucco:A(`#e2dfd8`,{map:re,roughness:.95}),marble:A(`#ffffff`,{map:oe,roughness:.35}),fascia:A(`#37383b`,{roughness:.55,metalness:.25}),cedar:A(`#ffffff`,{map:se,roughness:.6}),frame:A(`#262729`,{roughness:.45,metalness:.5}),door:A(`#2b2c2e`,{roughness:.5,metalness:.2}),pull:A(`#8d8f92`,{roughness:.25,metalness:1}),glass:new O({color:`#1b2430`,roughness:.04,metalness:.9,transparent:!0,opacity:.72,envMapIntensity:1.8}),timber:A(`#ffffff`,{map:ce,roughness:.75}),osb:A(`#ffffff`,{map:fe,roughness:.85}),wrap:A(`#e4e6e3`,{roughness:.6}),found:A(`#ffffff`,{map:N,roughness:.95}),pad:A(`#c9c7c2`,{map:N,roughness:.9}),steel:A(`#7a7c80`,{roughness:.3,metalness:.85}),fence:A(`#2e2f31`,{roughness:.7}),leaf2:A(`#5b7343`,{roughness:.9}),led:new O({color:`#2a2622`,emissive:`#ffe0b3`,emissiveIntensity:0,roughness:.5}),pot:A(`#ffffff`,{map:oe,roughness:.5})},ye=e=>{let t=e.index?e.toNonIndexed():e;for(let e of Object.keys(t.attributes))[`position`,`normal`,`uv`].includes(e)||t.deleteAttribute(e);return t.clearGroups(),t},L=(e,n,r)=>ye(new t(e,n,r)),be=(e,t,n,r)=>{t.computeBoundingBox();let i=t.attributes.position.count,a=t.boundingBox.min.y;t.setAttribute(`aOrder`,new h(new Float32Array(i).fill(r),1)),t.setAttribute(`aBase`,new h(new Float32Array(i).fill(a),1));let o=e.parts.get(n)??[];o.push(t),e.parts.set(n,o)},R=(e,t,n,r,i,a,o,s,c)=>{let l=L(Math.abs(i-t),Math.abs(a-n),Math.abs(o-r));l.translate((t+i)/2,(n+a)/2,(r+o)/2),be(e,l,s,c)},xe=e=>{let t=new F(e.b[0]-e.a[0],0,e.b[1]-e.a[1]),n=t.length();t.normalize();let r=new F(0,1,0),i=new F().crossVectors(t,r),a=new F((e.a[0]+e.b[0])/2,0,(e.a[1]+e.b[1])/2+6.25),o=e.ext?i.dot(a)>0?1:-1:0;return{m:new S().makeBasis(t,r,i).setPosition(e.a[0],0,e.a[1]),len:n,ex:t,ez:i,outward:o,wz:t=>o===0?t-e.t/2:o>0?-t:t}},z=(e,t,n,r,i,a,o,s,c,l)=>{if(r-n<.004||a-i<.004)return;let u=t.wz(o),d=t.wz(s),f=L(r-n,a-i,Math.abs(d-u));f.translate((n+r)/2,(i+a)/2,(u+d)/2),f.applyMatrix4(t.m),be(e,f,c,l)},Se=(e,t)=>{let n=new Set([0,t]);e.ops.forEach(e=>{n.add(e.u0),n.add(e.u1)});let r=[...n].sort((e,t)=>e-t),i=[];for(let t=0;t<r.length-1;t++){let n=r[t],a=r[t+1],o=(n+a)/2,s=e.ops.filter(e=>e.u0<=o&&e.u1>=o).sort((e,t)=>e.v0-t.v0),c=e.y0;for(let e of s)e.v0>c&&i.push([n,a,c,e.v0]),c=Math.max(c,e.v1);e.y1>c&&i.push([n,a,c,e.y1])}return i},B={card:Xe(0,.25),found:Xe(0,.2),frameG:Xe(0,.05),joist:Xe(1,.06),frameU:Xe(0,.05),rafter:Xe(1,.06),sheath:Xe(0,.08),env:Xe(0,.1),roof:Xe(1,.1),glaze:Xe(1,.12),land:Xe(0,.15)};He.forEach((e,t)=>{let n=xe(e);for(let[r,i,a,o]of Se(e,n.len))z(B.card,n,r,i,a,o,0,e.t,I.card,t%14/14*.6)}),We.forEach(([e,t,n,r,i])=>R(B.card,e,i,n,t,i+.08,r,I.card,.75)),Ge.forEach(([e,t,n,r,,i])=>R(B.card,e,i-.08,n,t,i,r,I.card,.7)),R(B.card,-2.8,0,.35,-2.2,6.14,-.2,I.card,.65),R(B.found,-5.75,-.6,.15,5.75,0,-12.65,I.found,0);let V=.038,Te=.406,Ee=(e,t,n,r)=>{let i=xe(t),a=t.ext?.14:.089,o=t.ext?0:(t.t-a)/2,s=o+a,c=e=>K(n,r,e/Math.max(i.len,.01)),l=I.timber;z(e,i,0,i.len,t.y0,t.y0+V,o,s,l,n),z(e,i,0,i.len,t.y1-V*2,t.y1,o,s,l,r);let u=e=>t.ops.find(t=>e>t.u0-V&&e<t.u1+V),d=t.y0+V,f=t.y1-V*2;for(let t=V/2;t<i.len;t+=Te){let n=u(t);n?(n.v1+.24<f&&z(e,i,t-V/2,t+V/2,n.v1+.24,f,o,s,l,c(t)),!n.door&&n.v0-V>d&&z(e,i,t-V/2,t+V/2,d,n.v0-V,o,s,l,c(t))):z(e,i,t-V/2,t+V/2,d,f,o,s,l,c(t))}z(e,i,i.len-V,i.len,d,f,o,s,l,r);for(let n of t.ops){let t=c((n.u0+n.u1)/2);z(e,i,n.u0-V*2,n.u0-V,d,f,o,s,l,t),z(e,i,n.u1+V,n.u1+V*2,d,f,o,s,l,t),z(e,i,n.u0-V,n.u0,d,n.v1,o,s,l,t),z(e,i,n.u1,n.u1+V,d,n.v1,o,s,l,t),n.v1+.24<=f+.001&&z(e,i,n.u0-V,n.u1+V,n.v1,n.v1+.24,o,s,l,t+.02),!n.door&&n.v0>d+V&&z(e,i,n.u0,n.u1,n.v0-V,n.v0,o,s,l,t+.02)}},De=He.filter(e=>e.y0===0),Oe=He.filter(e=>e.y0>0);De.forEach((e,t)=>Ee(B.frameG,e,t/De.length*.82,t/De.length*.82+.16)),Oe.forEach((e,t)=>Ee(B.frameU,e,t/Oe.length*.82,t/Oe.length*.82+.16));for(let e=-.1;e>-12.45;e-=Te){let t=ze(-e/12.5)*.7;e<Ue.z1||e>Ue.z0?R(B.joist,-5.55,q,e,5.55,3.205,e-V,I.timber,t):(R(B.joist,-5.55,q,e,Ue.x0,3.205,e-V,I.timber,t),R(B.joist,Ue.x1,q,e,5.55,3.205,e-V,I.timber,t))}R(B.joist,-5.6,q,0,5.6,3.205,-.038,I.timber,0),R(B.joist,-5.6,q,0,-5.55,3.205,X,I.timber,0),R(B.joist,5.55,q,0,5.6,3.205,X,I.timber,0),R(B.joist,-5.6,q,-12.462,5.6,3.205,X,I.timber,.7);for(let e=-5.55;e<5.5;e+=1.22)for(let t=-.02,n=0;t>X;t-=2.44,n++){let r=e,i=Math.min(e+1.21,5.58),a=t,o=Math.max(t-2.43,-12.48);i>Ue.x0&&r<Ue.x1&&a>Ue.z1&&o<Ue.z0||R(B.joist,r,3.205,a,i,3.225,o,I.osb,.75+n/6*.2)}We.forEach(([e,t,n,r,i],a)=>{for(let o=n-.02;o>r;o-=Te)R(B.rafter,e+.05,i,o,t-.05,i+.235,o-V,I.timber,a*.25+ze((n-o)/(n-r))*.25)}),He.filter(e=>e.ext).forEach((e,t)=>{let n=xe(e);for(let[r,i,a,o]of Se(e,n.len))for(let e=a;e<o-.01;e+=1.22)z(B.sheath,n,r,i,e,Math.min(e+1.21,o),-.012,0,I.wrap,ze(e/5.5)*.7+t%3*.04)}),We.forEach(([e,t,n,r,i],a)=>R(B.sheath,e+.01,i+.235,n,t-.01,i+.255,r,I.osb,.5+a*.06)),We.forEach(([e,t,n,r,i],a)=>{let o=a*.25,s=.04;R(B.rafter,e+.01,i,n,t-.01,i+.255,n-s,I.timber,o),R(B.rafter,e+.01,i,r+s,t-.01,i+.255,r,I.timber,o),R(B.rafter,e+.01,i,n,e+.01+s,i+.255,r,I.timber,o),R(B.rafter,t-.01-s,i,n,t-.01,i+.255,r,I.timber,o)});let ke=[],H=new _;u.add(H);let Ae=Je(256,256,e=>{let t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,`#fff6e6`),t.addColorStop(.12,`#f2dcc0`),t.addColorStop(.55,`#b39a80`),t.addColorStop(.72,`#5a4a3d`),t.addColorStop(1,`#2a2420`),e.fillStyle=t,e.fillRect(0,0,256,256);for(let t=18;t<256;t+=64){let n=e.createRadialGradient(t,6,2,t,6,70);n.addColorStop(0,`rgba(255,248,232,.9)`),n.addColorStop(1,`rgba(255,248,232,0)`),e.fillStyle=n,e.fillRect(0,0,256,120)}e.fillStyle=`rgba(40,34,30,.75)`,e.fillRect(30,150,90,46),e.fillRect(150,120,14,76),e.fillRect(190,168,52,28),e.fillStyle=`rgba(70,58,48,.5)`,e.fillRect(96,40,3,150)},!0,!1);He.filter(e=>e.ext).forEach(e=>{let t=xe(e);for(let[n,r,i,a]of Se(e,t.len))for(let o=i;o<a-.01;o+=.9)z(B.env,t,n,r,o,Math.min(o+.9,a),-.03,e.t,I.stucco,ze(o/5.6)*.75);for(let n of e.ops){let r=ze(n.v0/5.6)*.6+.3,i=.06,a=.06,o=.16;z(B.glaze,t,n.u0,n.u1,n.v1-i,n.v1,a,o,I.frame,r),z(B.glaze,t,n.u0,n.u0+i,n.v0,n.v1,a,o,I.frame,r),z(B.glaze,t,n.u1-i,n.u1,n.v0,n.v1,a,o,I.frame,r),n.door||z(B.glaze,t,n.u0,n.u1,n.v0,n.v0+i,0,o,I.frame,r);let s=n.mull??0;for(let e=1;e<=s;e++){let c=K(n.u0,n.u1,e/(s+1));z(B.glaze,t,c-i/2,c+i/2,n.v0,n.v1,a,o,I.frame,r)}if(n.tran&&z(B.glaze,t,n.u0,n.u1,n.tran-i/2,n.tran+i/2,a,o,I.frame,r),n.door&&e===He[2]){let e=(n.u0+n.u1)/2;z(B.glaze,t,n.u0+i,e-.005,n.v0,n.v1-i,.12,.17,I.door,r),z(B.glaze,t,e+.005,n.u1-i,n.v0,n.v1-i,.12,.17,I.door,r),z(B.glaze,t,e-.09,e-.06,.55,1.75,.04,.08,I.pull,r),z(B.glaze,t,e+.06,e+.09,.55,1.75,.04,.08,I.pull,r);continue}z(B.glaze,t,n.u0+i,n.u1-i,n.v0+(n.door?0:i),n.v1-i,.105,.115,I.glass,r);let c=new w({map:Ae,color:`#232323`}),l=new C(new j(n.u1-n.u0+.6,n.v1-n.v0+.4),c),u=new F((n.u0+n.u1)/2,(n.v0+n.v1)/2,t.wz(1.6)).applyMatrix4(t.m);l.position.copy(u),l.lookAt(u.clone().add(t.ez.clone().multiplyScalar(t.outward))),H.add(l),ke.push(c)}});for(let[e,t,n,r]of[[-5.63,.03,-5.3,-12.53],[5.3,.03,5.63,-12.53],[-5.63,-12.2,5.63,-12.53],[-5.63,.03,-2.2,-.3],[1.78,.03,5.63,-.3]])R(B.env,e,2.95,t,n,3.27,r,I.stucco,.55);R(B.env,-2.8,0,.35,-2.2,6.14,-.2,I.marble,.2),R(B.env,-2.2,0,-.02,-2.08,Ve,-1.2,I.marble,.25),R(B.land,-.32,0,.95,.12,.62,.45,I.pot,.1),R(B.land,1.4,0,.95,1.84,.62,.45,I.pot,.1);let U=new _;u.add(U);let je=(e,t,n,r,i)=>{let a=.16,o=.03,s=Math.min(n-r,4.5);U.add(new C(_e([L(t-e-2*a,o,.03).translate((e+t)/2,i-o/2,n-a),L(.03,o,s).translate(e+a,i-o/2,n-a-s/2),L(.03,o,s).translate(t-a,i-o/2,n-a-s/2)]),I.led))};We.forEach(([e,t,n,r,i,a])=>{R(B.roof,e,i+.06,n,t,a,r,I.fascia,.2),R(B.roof,e+.02,i,n-.02,t-.02,i+.06,r+.02,I.cedar,.2),je(e,t,n,r,i)}),Ge.forEach(([e,t,n,r,i,a],o)=>{R(B.roof,e,i+.05,n,t,a,r,I.fascia,o*.15),R(B.roof,e+.02,i,n-.02,t-.02,i+.05,r+.02,I.cedar,o*.15),je(e,t,n,Math.max(r,n-1.2),i)});let Ne=new l(.05,.05,.01,16);for(let e of[-1.6,-.9]){let t=new C(Ne,I.led);t.position.set(e,2.665,-.5),U.add(t)}for(let e of[-.07,1.34]){let n=new C(new t(.11,.42,.1),I.fascia);n.position.set(e,2.54,.06),U.add(n);let r=new C(new t(.09,.012,.08),I.led);r.position.set(e,2.755,.06),U.add(r);let i=r.clone();i.position.y=2.325,U.add(i)}let Fe=Je(128,256,e=>{let t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,`rgba(255,200,140,1)`),t.addColorStop(.35,`rgba(255,190,120,0.35)`),t.addColorStop(1,`rgba(255,180,110,0)`),e.fillStyle=t,e.fillRect(0,0,128,256);let n=e.getImageData(0,0,128,256);for(let e=0;e<256;e++)for(let t=0;t<128;t++)n.data[(e*128+t)*4+3]*=Math.min(1,Math.min(t,127-t)/18);e.putImageData(n,0,0)},!0,!1),Le=new w({map:Fe,transparent:!0,opacity:0,depthWrite:!1,blending:2}),W=new _;u.add(W);let J=(e,t,n,r,i=!1)=>{let a=new C(new j(t-e,r),Le);a.position.set((e+t)/2,n-r/2,.02),i&&(a.rotation.z=Math.PI),W.add(a)};J(-5.6,-2.8,2.58,1.5),J(1.78,5.6,2.67,1.5),J(-5.4,-2.8,Y,1.4),J(1.78,5.17,Y,1.4),J(-.38,1.78,Ve,1);for(let e of[-.07,1.34])J(e-.35,e+.35,3.6,.85,!0),J(e-.35,e+.35,2.33,1.2);let Z={uGrass:{value:0}},Qe=A(`#ffffff`,{map:me,roughness:1});Qe.onBeforeCompile=e=>{e.uniforms.uGrass=Z.uGrass,e.uniforms.uGrassMap={value:pe},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vWp;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uGrass; uniform sampler2D uGrassMap; varying vec3 vWp;`).replace(`#include <map_fragment>`,`#include <map_fragment>
        float r = length(vWp.xz - vec2(0.0, -6.0));
        float gm = 1.0 - smoothstep(uGrass * 46.0 - 4.0, uGrass * 46.0, r);
        vec3 lawn = texture2D(uGrassMap, vMapUv * 0.6).rgb * (0.82 + 0.1 * sin(vWp.x * 0.37) * sin(vWp.z * 0.29) + 0.08 * sin(vWp.x * 1.3 + vWp.z * 0.7));
        diffuseColor.rgb = mix(diffuseColor.rgb, lawn * vec3(0.92, 0.95, 0.9), gm);
        diffuseColor.rgb *= 1.0 - 0.35 * smoothstep(18.0, 60.0, length(vWp.xz - vec2(0.0, -6.0)));`)};let $e=new C(new j(3e3,3e3),Qe);$e.rotation.x=-Math.PI/2,$e.position.set(0,-.15,-8),$e.receiveShadow=!0;let et=new _;u.add(et),et.add($e);for(let e=0;e<9;e++){let t=1.5+e*1.32,n=K(4.4,9.6,e/8),r=K(-.9,-.4,e/8),i=K(.62,.95,e/8);R(B.land,r-n/2,-.15,t+i,r+n/2,-.07,t,I.pad,.15+e*.05)}R(B.land,-12,-.15,16.4,12,-.06,14.2,I.pad,.6);let tt=new _;u.add(tt);let nt=Je(128,128,e=>{let t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,`rgba(255,236,206,.32)`),t.addColorStop(1,`rgba(255,236,206,0)`),e.fillStyle=t,e.fillRect(0,0,128,128)},!0,!1),rt=new w({map:nt,transparent:!0,opacity:0,depthWrite:!1,blending:2});for(let[e,n]of[[-4.6,4],[-2.6,1.6],[1,1.7],[1.7,3.6],[4,6.4],[-5.8,10.2]]){R(B.land,e-.11,-.15,n+.11,e+.11,.85,n-.11,I.steel,.3);let r=new C(new t(.12,.03,.005),I.led);r.position.set(e,.7,n+.112),tt.add(r);let i=new C(new j(1.6,1.6),rt);i.rotation.x=-Math.PI/2,i.position.set(e,-.04,n+.15),tt.add(i)}for(let e of[-1,1])for(let t=0;t<7;t++)R(B.land,e*9.9-.03,-.15+t*.26,-1.5,e*9.9+.03,-.15+t*.26+.2,-26,I.fence,.4);let it=new c(.009,1,3,1);it.translate(0,.5,0);let at=[],ot=new _;u.add(ot);let st=A(`#2f382b`,{roughness:.95});for(let[e,t]of[[-5.4,-2.9],[1.9,5.5]]){let n=new C(new Re(t-e,.7,.5,3,.12),st);n.position.set((e+t)/2,-.15+.35,.6),n.castShadow=n.receiveShadow=!0,ot.add(n)}at.push([-.1,.7,.62,.9],[1.62,.7,.62,.9]);let ct=new b(it,I.leaf2,at.length*48),lt=new S,ut=new ie,dt=new m,ft=new o,pt=0;for(let[e,t,n,r]of at)for(let i=0;i<48;i++)dt.set((Q()-.5)*.9,Q()*6.28,(Q()-.5)*.9),ut.setFromEuler(dt),lt.compose(new F(e+(Q()-.5)*.25,n,t+(Q()-.5)*.25),ut,new F(1,r*(.6+Q()*.6),1)),ct.setMatrixAt(pt,lt),ct.setColorAt(pt++,ft.setHSL(.17+Q()*.08,.22,.2+Q()*.16));ct.castShadow=!0,u.add(ct);for(let e of Object.values(B))for(let[t,n]of e.parts){let r=t.clone();r.onBeforeCompile=Ze(e),r.customProgramCacheKey=()=>`L${e.mode}`;let i=new T({depthPacking:ae});i.onBeforeCompile=Ze(e),i.customProgramCacheKey=()=>`D${e.mode}`;let a=new C(_e(n),r);a.customDepthMaterial=i,a.castShadow=!t.transparent,a.receiveShadow=!0,u.add(a),e.meshes.push(a)}let mt=B.card.meshes.map(e=>e.material);mt.forEach(e=>{e.transparent=!0});let ht=1536/30,gt={uMap:{value:Je(1536,2048,e=>{let t=0,n=(e,t=1)=>`rgba(255,${Math.round(ze(e)*255)},0,${t})`,r=(e,t)=>[(e-0+15)*ht,(t- -8+20)*ht],i=()=>ze(t++/170);e.fillStyle=`#000`,e.fillRect(0,0,1536,2048),e.lineCap=`round`,e.lineJoin=`round`;let a=(t,i,a,o=[])=>{e.strokeStyle=n(a),e.lineWidth=i,e.setLineDash(o),e.beginPath(),t.forEach(([t,n],i)=>{let[a,o]=r(t,n);i?e.lineTo(a,o):e.moveTo(a,o)}),e.stroke(),e.setLineDash([])};a([[-9.9,7.5],[9.9,7.5],[9.9,-25.4],[-9.9,-25.4],[-9.9,7.5]],3,i(),[26,10,4,10]),a([[-8.4,6],[8.4,6],[8.4,-18],[-8.4,-18],[-8.4,6]],1.4,i(),[10,10]),He.filter(e=>e.y0===0).forEach(t=>{let o=i(),s=xe(t);e.fillStyle=n(o);for(let[n,i]of Se({...t,ops:t.ops.filter(e=>e.v0<1.2)},s.len).filter(e=>e[2]<.01)){let a=[[n,0],[i,0],[i,t.t],[n,t.t]].map(([e,t])=>new F(e,0,s.wz(t)).applyMatrix4(s.m));e.beginPath(),a.forEach((t,n)=>{let[i,a]=r(t.x,t.z);n?e.lineTo(i,a):e.moveTo(i,a)}),e.closePath(),e.fill()}for(let o of t.ops){let c=i(),l=new F(o.u0,0,s.wz(t.t/2)).applyMatrix4(s.m),u=new F(o.u1,0,s.wz(t.t/2)).applyMatrix4(s.m);if(!o.door){a([[l.x,l.z],[u.x,u.z]],2,c);continue}let d=Math.min(o.u1-o.u0,1.2),f=new F(o.u0,0,s.wz(t.t)).applyMatrix4(s.m),p=s.ez.clone().multiplyScalar(t.ext?-s.outward:1),m=s.ex.clone(),h=f.clone().add(p.clone().multiplyScalar(d));a([[f.x,f.z],[h.x,h.z]],1.6,c),e.strokeStyle=n(c,.8),e.lineWidth=1.2,e.beginPath();for(let t=0;t<=16;t++){let n=t/16*Math.PI/2,i=f.clone().add(p.clone().multiplyScalar(Math.cos(n)*d)).add(m.clone().multiplyScalar(Math.sin(n)*d)),[a,o]=r(i.x,i.z);t?e.lineTo(a,o):e.moveTo(a,o)}e.stroke()}});let o=i();for(let e=0;e<=14;e++)a([[.62,-4.6-e*.28],[1.76,-4.6-e*.28]],1,o);a([[1.19,-4.7],[1.19,-8.4]],1,o),a([[1,-8.2],[1.19,-8.5],[1.38,-8.2]],1,o);for(let e=0;e<9;e++){let t=1.5+e*1.32,n=K(4.4,9.6,e/8),r=K(-.9,-.4,e/8),o=K(.62,.95,e/8);a([[r-n/2,t],[r+n/2,t],[r+n/2,t+o],[r-n/2,t+o],[r-n/2,t]],1.4,i())}We.forEach(([e,t,n,r])=>a([[e,n],[t,n],[t,r],[e,r],[e,n]],1.2,i(),[14,8]));let s=(t,o,s,c)=>{let l=i(),u=[t[0]+s[0],t[1]+s[1]],d=[o[0]+s[0],o[1]+s[1]];a([u,d],1.2,l),a([t,u],.8,l),a([o,d],.8,l);for(let e of[u,d])a([[e[0]-.18,e[1]+.18],[e[0]+.18,e[1]-.18]],2,l);let[f,p]=r((u[0]+d[0])/2,(u[1]+d[1])/2);e.save(),e.translate(f,p),Math.abs(u[0]-d[0])<.01&&e.rotate(-Math.PI/2),e.fillStyle=n(l),e.font=`500 22px Switzer, system-ui, sans-serif`,e.textAlign=`center`,e.fillText(c,0,-10),e.restore()};s([-5.6,X],[5.6,X],[0,-1.4],``),s([-5.6,0],[-5.6,X],[-1.6,0],``),s([-9.9,7.5],[9.9,7.5],[0,1.3],`LOT 65'`),s([9.9,7.5],[9.9,-25.4],[1.3,0],`108'`),e.textAlign=`center`,Ke.forEach(([t,a,o])=>{let s=i(),[c,l]=r(a,o);e.fillStyle=n(s),e.font=`600 21px Switzer, system-ui, sans-serif`,e.fillText(t,c,l)});let c=i(),[l,u]=r(-12.6,-22);e.strokeStyle=n(c),e.lineWidth=2,e.beginPath(),e.arc(l,u,30,0,7),e.stroke(),e.fillStyle=n(c),e.beginPath(),e.moveTo(l,u-30),e.lineTo(l+12,u+14),e.lineTo(l,u+4),e.lineTo(l-12,u+14),e.closePath(),e.fill(),e.font=`600 20px Switzer, system-ui, sans-serif`,e.fillText(`N`,l,u-40);let d=i(),[f,p]=r(4.2,-21.4),[m,h]=r(13.6,-26.6);e.strokeStyle=n(d),e.lineWidth=2,e.strokeRect(f,h,m-f,p-h),e.beginPath(),e.moveTo(f,h+72),e.lineTo(m,h+72),e.stroke(),e.textAlign=`left`,e.fillStyle=n(d),e.font=`600 30px Switzer, system-ui, sans-serif`,e.fillText(`LEGACY ON PANDORA`,f+22,h+46),e.font=`500 19px Switzer, system-ui, sans-serif`,[`SINGLE FAMILY HOME  /  4,309 SQ FT`,`LOT 65' x 108'  /  6 BED  /  8 BATH`,`ILLUSTRATIVE PLAN  /  NOT TO SCALE`,`TAKEFORM`].forEach((t,n)=>e.fillText(t,f+22,h+108+n*34))},!1,!1)},uDraw:{value:0},uFade:{value:1}},_t=new C(new j(30,40),new M({uniforms:gt,transparent:!0,depthWrite:!1,vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform sampler2D uMap; uniform float uDraw, uFade; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      void main(){
        vec4 t = texture2D(uMap, vUv);
        float ink = t.r, ord = t.g / max(t.r, 0.004);
        float on = smoothstep(ord, ord + 0.012, uDraw * 1.02);
        vec3 paper = vec3(0.78, 0.765, 0.73) * (0.97 + 0.03 * h(floor(vUv * 900.0)));
        float edge = smoothstep(0.0, 0.012, min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y)));
        gl_FragColor = vec4(mix(paper, vec3(0.045, 0.045, 0.05), ink * on * 0.92), uFade * edge);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));_t.rotation.x=-Math.PI/2,_t.position.set(0,.012,-8),_t.renderOrder=2,u.add(_t);let vt=new C(new j(31.2,41.2),A(`#141415`,{roughness:.95}));vt.rotation.x=-Math.PI/2,vt.position.set(0,.004,-7.75),vt.receiveShadow=!0,u.add(vt);let yt=null,bt=null;i||(yt=new Ce(s,new he(1,1,{type:v,samples:4})),yt.addPass(new we(u,d)),bt=new Me(u,d,1,1),bt.updateGtaoMaterial({radius:.6,distanceExponent:1.5,thickness:1.5,scale:1}),bt.setSceneClipBox(new e(new F(-70,-2,-80),new F(70,20,50))),yt.addPass(bt),yt.addPass(new Pe(new P(1,1),.32,.4,.92)),yt.addPass(new Ie));let xt=()=>innerHeight>innerWidth,St=[0,.14,.28,.42,.52,.62,.74,.86,1],Ct=[[-6,40,24],[-10,34,25],[-27,15,24],[-21,8.5,17],[-6,13,22],[14,7.5,21],[7.5,2.6,19.5],[.6,1.75,21.5],[.6,1.72,20.8]],wt=[[0,0,-7],[0,0,-7],[0,2,-6],[0,2.4,-6],[0,3,-6],[0,3,-5],[.3,3,-3],[.4,3.35,-2],[.4,3.35,-2]],Tt=new a(Ct.map(e=>new F(...e)),!1,`centripetal`),Et=new a(wt.map(e=>new F(...e)),!1,`centripetal`),Dt=e=>{let t=0;for(;t<St.length-2&&e>St[t+1];)t++;return(t+Be(G(e,St[t],St[t+1])))/(St.length-1)},$=0,Ot=0,kt=0,At=0,jt=0,Mt=0,Nt=0,Pt=0,Ft=0,It=()=>{Nt=n.clientWidth,Pt=n.clientHeight,Nt&&Pt&&(s.setSize(Nt,Pt,!1),yt&&(yt.setPixelRatio(s.getPixelRatio()),yt.setSize(Nt,Pt)),d.aspect=Nt/Pt,d.updateProjectionMatrix())},Lt=new F,Rt=new F,zt=new F,Bt=new F(0,1,0),Vt={dusk:new o(`#2a2f55`),dayFog:new o(`#b3b8be`),studio:new o(`#1d1d1f`),duskFog:new o(`#a8979d`),warm:new o(`#e6d2b8`),off:new o(`#1e1e1e`),sunDay:new o(`#fff1de`),sunLow:new o(`#ffb98a`),sky:new o(`#dfe6ef`)},Ht=u.fog;function Ut(){if(Ft=0,!Nt)return;gt.uDraw.value=Math.max(Be(Ot/2.4),G($,0,.05)),B.card.k.value=K(0,1.25,G($,.13,.27));let e=Be(G($,.33,.4));mt.forEach(t=>{t.opacity=1-e,t.depthWrite=e<.5}),B.card.meshes.forEach(t=>{t.position.y=e*1.5,t.visible=e<.999&&B.card.k.value>0}),gt.uFade.value=1-Be(G($,.31,.38)),_t.visible=vt.visible=gt.uFade.value>.001,et.visible=$>.3,B.found.k.value=K(0,1.2,G($,.35,.39)),B.frameG.k.value=K(0,1.06,G($,.38,.45)),B.joist.k.value=K(0,1.06,G($,.44,.48)),B.frameU.k.value=K(0,1.06,G($,.47,.52)),B.rafter.k.value=K(0,1.06,G($,.51,.54)),B.sheath.k.value=K(0,1.08,G($,.53,.57)),B.env.k.value=K(0,1.1,G($,.56,.62)),B.glaze.k.value=K(0,1.12,G($,.58,.63)),B.roof.k.value=K(0,1.1,G($,.585,.612));let t=G($,.6,.618);for(let e of[B.frameG,B.frameU,B.joist,B.rafter,B.sheath])e.meshes.forEach(n=>{n.visible=e.k.value>0&&t<1});for(let e of[B.found,B.env,B.glaze,B.roof,B.land])e.meshes.forEach(t=>{t.visible=e.k.value>0});B.land.k.value=K(0,1.15,G($,.6,.68)),Z.uGrass.value=Be(G($,.6,.7)),ct.visible=ot.visible=$>.64,ct.scale.y=ot.scale.y=Math.max(.01,Be(G($,.64,.7)));let n=Be(G($,.31,.4)),r=Be(G($,.66,.8)),i=Be(G($,.7,.82));f.uDay.value=n,f.uDusk.value=r,Ht.color.copy(Vt.studio).lerp(Vt.dayFog,n).lerp(Vt.duskFog,r),Ht.color.getRGB(f.uFog.value,yt?x:le),Ht.near=K(70,26,n),Ht.far=K(160,95,n);let a=K(-.9,-.5,n),o=K(.95,.75,n)-.55*r;k.position.set(Math.sin(a)*40*Math.cos(o),Math.sin(o)*40,Math.cos(a)*40*Math.cos(o)-6),k.intensity=K(K(1.25,1.7,n),.22,r),k.color.copy(Vt.sunDay).lerp(Vt.sunLow,r),D.intensity=K(K(.35,.55,n),.42,r),D.color.copy(Vt.sky).lerp(Vt.dusk,r),u.environmentIntensity=K(.3,.12,r),s.toneMappingExposure=K(.95,1.12,r),I.led.emissiveIntensity=3*i,tt.visible=$>.68,rt.opacity=i,U.visible=$>.6,H.visible=$>.58,Le.opacity=.5*i,W.visible=i>.001,ke.forEach(e=>e.color.copy(Vt.off).lerp(Vt.warm,i));let c=Dt($);if(Tt.getPoint(c,Lt),Et.getPoint(c,Rt),xt())Lt.sub(Rt).multiplyScalar($<.62?K(1.55,1.5,G($,.36,.44))+.45*G($,.54,.62):K(1.95,1.18,G($,.78,.88))).add(Rt);else{let e=1-Be(G($,.02,.12));zt.subVectors(Rt,Lt).cross(Bt).normalize().multiplyScalar(-7*e),Lt.add(zt),Rt.add(zt)}kt+=(jt-kt)*.08,At+=(Mt-At)*.08;let l=1-G($,.8,.9);Lt.x+=kt*1.2*l,Lt.y-=At*.6*l,d.position.copy(Lt),d.lookAt(Rt),d.fov=xt()?K(44,50,G($,.62,.86)):32,d.updateProjectionMatrix(),yt?yt.render():s.render(u,d),(Math.abs(jt-kt)>.002||Math.abs(Mt-At)>.002)&&Wt()}let Wt=()=>{Ft||=requestAnimationFrame(Ut)};return new ResizeObserver(()=>{It(),Wt()}).observe(n),It(),Wt(),window.__hero=e=>{$=e,Ut()},window.__gtao=bt,{set(e){e!==$&&($=e,Wt())},intro(e){Ot=e,Wt()},pointer(e,t){jt=e,Mt=t,Wt()}}}export{Qe as mountHero};