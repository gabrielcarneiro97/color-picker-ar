/**
 * Copyright (c) 2015-present, Viro Media, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
'use strict';

import React from 'react';

import {
  ViroARSceneNavigator,
} from 'react-viro';


var arScenes = {
  'ARSimpleSample': require('./js/ARSample/HelloWorldSceneAR.js'),
  'ARPhysicsSample': require('./js/ARPhysicsSample/BasicPhysicsSample.js'),
  'ARCarDemo' : require('./js/ARCarDemo/ARCarDemo.js'),
  'ARPosterDemo' : require('./js/ARPosterDemo/ARPosterDemo.js'),
  'BusinessCard' : require('./js/ARBusinessCard/BusinessCard.js'),
}


function ViroCodeSamplesSceneNavigator () {
  console.log('teste');
  return (
    <ViroARSceneNavigator
      initialScene={{
        scene: arScenes['ARPhysicsSample'],
      }}
      apiKey="0"
    />
    );
}

// Uncomment the below line to use the ARDrivingCar Demo. Don't forget to set the apiKey variable in ARDrivingCar.js
// ViroCodeSamplesSceneNavigator = require('./js/ARDrivingCarDemo/ARDrivingCar');

module.exports = ViroCodeSamplesSceneNavigator;
