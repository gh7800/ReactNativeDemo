package com.jdapp;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * @author wangs
 * 将原生模块-注册
 */
class RegisteredPackage implements ReactPackage {

	/**
	 * 添加需要使用的原生模块
	 * @param reactContext 上下文
	 * @return
	 */
	@Override
	public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
		List<NativeModule> list = new ArrayList<>();
		list.add(new ToastMoudle(reactContext));
		list.add(new CallBackModule(reactContext));
		return list;
	}

	@Override
	public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {

		return Collections.emptyList();
	}
}
