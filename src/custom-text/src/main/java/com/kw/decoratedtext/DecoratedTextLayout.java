package com.kw.decoratedtext;

import android.content.Context;
import android.os.Build;
import android.support.design.widget.TextInputLayout;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.UIManagerModule;
import com.facebook.react.uimanager.events.EventDispatcher;

/*package*/ class DecoratedTextLayout extends TextInputLayout {

    public DecoratedTextLayout(ReactContext reactContext) {
        super(reactContext);

    }
}
