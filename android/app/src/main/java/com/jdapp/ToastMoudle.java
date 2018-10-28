package com.jdapp;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

/**
 * 调用原生的Toast 模块
 * @author wangs
 */
public class ToastMoudle extends ReactContextBaseJavaModule {
	private static final String DURATION_SHORT_KEY = "SHORT";
	private static final String DURATION_LONG_KEY = "LONG";

	public ToastMoudle(ReactApplicationContext reactContext) {
		super(reactContext);
	}

	/**
	 * @return 返回给js调用的名称
	 *  NativeModules.mytoast.show()
	 */
	@Override
	public String getName() {
		return "mytoast";
	}
	/**
	 * 返回了需要导出给JavaScript使用的常量
	 */
	@Override
	public Map<String, Object> getConstants() {
		final Map<String, Object> constants = new HashMap<>();
		constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
		constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
		return constants;
	}
	/**
	 * 导出给js使用的方法，需要使用注解@ReactMethod。方法的返回类型必须为void
	 */
	@ReactMethod
	public void show(String message, int duration) {
		Toast.makeText(getReactApplicationContext(), message, duration).show();
	}

}
