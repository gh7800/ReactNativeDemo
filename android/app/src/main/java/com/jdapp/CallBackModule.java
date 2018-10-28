package com.jdapp;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * 调用原生Android，回调时并有返回值
 */
class CallBackModule extends ReactContextBaseJavaModule {

	public CallBackModule(ReactApplicationContext reactContext) {
		super(reactContext);
	}

	@Override
	public String getName() {
		return "callbackmodule";
	}

	@ReactMethod
	public void jisuan(int m, int n, Callback callback) {
		int result = m+n;
	 	callback.invoke("结果是= ",result);
	}
}
