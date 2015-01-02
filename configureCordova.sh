#!/bin/bash

rm -rf platforms/* plugins/* merge/*
CORDOVA_BIN=node_modules/cordova/bin
$CORDOVA_BIN/cordova platform add android
$CORDOVA_BIN/cordova platform add ios
$CORDOVA_BIN/cordova plugin add org.apache.cordova.console
$CORDOVA_BIN/cordova plugin add org.apache.cordova.device
$CORDOVA_BIN/cordova plugin add org.apache.cordova.camera

