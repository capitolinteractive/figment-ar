/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
 
 'use strict';

 import React, { Component } from 'react';
 import {
   AppRegistry,
   View
 } from 'react-native';

 import {
   ViroImage,
   ViroParticleEmitter,
   ViroUtils,
 } from '@akadrimer/react-viro';

/**
 * This file is a collection of functions that configure each "Effect" in the app.
 * The Snow, Bubbles, Smoke & Fireworks are Particle Effects and therefore configure <ViroParticleEmitter> here.
 * Rest of the effects are video "Post Processing Effects" that don't require Particle Emitters.
 *
 * These functions are tied with the data model used in the ListView at the bottoms of the screen. The data model is
 * defined at path: js/model/EffectItems.js
 */
  export function getEmptyEffect() {
    var views = [];
    return views;
  }

  export function getGrayScale() {
    var views = [];
    return views;
  }

  export function getSepia() {
    var views = [];
    return views;
  }

  export function getThermal() {
    var views = [];
    return views;
  }

  export function getSinCity() {
    var views = [];
    return views;
  }

  export function getBarrel() {
    var views = [];
    return views;
  }

  export function getPinCushion() {
    var views = [];
    return views;
  }

  export function getSnow(){
    var views = [];
      views.push((
        <ViroParticleEmitter
            key={"effect_snow"}
            position={[0, 4.5, 0]}
            duration={2000}
            visible={true}
            run={true}
            loop={true}
            fixedToEmitter={true}

            image={{
                   source:require("../res/particle_snow.png"),                 // Image source of the image particle.
                   height:0.01,
                   width:0.01,
            }}

            spawnBehavior={{
              particleLifetime:[5000,5000],
              emissionRatePerSecond:[600, 600],
              spawnVolume:{shape:"box", params:[20, 1, 20], spawnOnSurface:false},
              maxParticles:2000
            }}

            particleAppearance={{
              opacity:{
                initialRange:[0, 0],
                factor:"Time",
                interpolation:[
                  {endValue:1.0, interval:[0,500]},
                  {endValue:0.0, interval:[4000,5000]}
                ]
              },
              rotation:{
                initialRange:[0, 360],
                factor:"Time",
                interpolation:[
                  {endValue:1080, interval:[0,5000]},
                ]
              },
              scale:{
                initialRange:[[5,5,5], [10,10,10]],
                factor:"Time",
                interpolation:[
                  {endValue:[6,6,6], interval:[0,1000]},
                  {endValue:[10,10,10], interval:[3000,5000]},
                  {endValue:[5,5,5], interval:[4000,5000]}
                ]
              },

            }}

            particlePhysics={{
              velocity:{
                initialRange:[[-2,-.5,0], [2,-3.5,0]]}
            }}
          />
      ));
    return views;
  }
  export function getBubbles(){
    var views = [];
      views.push((
        <ViroParticleEmitter
            key={"effect_bubbles"}
            position={[0, 4.5, 0]}
            duration={1000}
            visible={true}
            run={true}
            loop={true}
            fixedToEmitter={true}

            image={{
                   source:require("../res/particle_rain.png"),                 // Image source of the image particle.
                   height:0.01,
                   width:0.01,
            }}

            spawnBehavior={{
              particleLifetime:[2500,2500],
              emissionRatePerSecond:[1000, 1000],
              spawnVolume:{shape:"box", params:[0, 1, 20], spawnOnSurface:false},
              maxParticles:4000
            }}

            particleAppearance={{
              opacity:{
                initialRange:[0, 0],
                factor:"Time",
                interpolation:[
                  {endValue:1.0, interval:[0,0]},
                  {endValue:0.0, interval:[4000,5000]}
                ]
              },
              rotation:{
                initialRange:[0, 0],
                factor:"Time",
                interpolation:[
                  {endValue:0, interval:[0,0]},
                ]
              },
              scale:{
                initialRange:[[5,5,5], [10,10,10]],
                factor:"Time",
                interpolation:[
                  {endValue:[6,6,6], interval:[0,1000]},
                  {endValue:[10,10,10], interval:[3000,5000]},
                  {endValue:[5,5,5], interval:[4000,5000]}
                ]
              },

            }}

            particlePhysics={{
              velocity:{
                initialRange:[[-5,-1,-1], [2,-7,-1]]}
            }}
          />
      ));
    return views;
  }

  export function getSmoke(){
    var views = [];
      views.push((
        <ViroParticleEmitter
            key={"effect_smoke"}
            position={[0, 3, 0]}
            scale={[1, 1, 1]}
            duration={20000}
            visible={true}
            run={true}
            loop={true}
            fixedToEmitter={true}

            image={{
              source:require("../res/particle_smoke.png"),
              height:1,
              width:1,
            }}

            spawnBehavior={{
              particleLifetime:[20000,20000],
              emissionRatePerSecond:[10, 15],
              maxParticles:400,
              spawnVolume:{
                shape:"box",
                params:[10, .1, .1],
                spawnOnSurface:false
              },
            }}

            particleAppearance={{
              scale:{
                initialRange:[[1,1,1], [1,1,1]],
                interpolation:[
                  {endValue:[2,2,2], interval:[0,10000]},
                  {endValue:[1,1,1], interval:[10000,19000]},
                  {endValue:[0,0,0], interval:[19000,20000]},
                ]
              },

              opacity:{
                initialRange:[0.0, 0.0],
                interpolation:[
                  {endValue:0.3, interval:[0,1000]},
                  {endValue:0.1, interval:[10000,18000]},
                  {endValue:0.0, interval:[18000,20000]}
                ]
              },
            }}

            particlePhysics={{
              velocity:{initialRange:[[.02,-.05,.3],
                                      [-.02,-.1,-.3]]},
              acceleration:{initialRange:[[0,0,0], [0,0,0]]}
            }}
        />
        ));
  views.push((
        <Viro360Image
    source={require("./res/360_diving.jpg")}
    rotation={[0, 45, 0]}
    format="RGBA8"
    onLoadStart={this._onLoadStart}
    onLoadEnd={this._onLoadEnd}
    onError={this._onError} />
      ));
    return views;
  }

 

  

  
