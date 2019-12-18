// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log('The color is green.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'developer.chrome.com'},
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
    console.log(chrome);
    // chrome.contextMenus
    // chrome.contextMenus.create({title: 'djkldfk', onclick: function(a, b) { console.log('haha') }})
});
chrome.contextMenus.create({id: '1', title: 'djkldfk' });
chrome.contextMenus.onClick = function(a, b) {
    console.log(a,b)
}
// 右击
// chrome.contextMenus.create({
//     "title": "Oops",
//     "parentId": 999,
//     id: 1
// }, function () {
//     if (chrome.extension.lastError) {
//         console.log("Got expected error: " + chrome.extension.lastError.message);
//     }
// });
