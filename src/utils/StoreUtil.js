/**
 * 数据存储
 */
import { AsyncStorage } from 'react-native';

const StoreUtil = {
    insertData: async (key, value) => {
        try {
            if (key && value) {
                // console.log('insertdata')
                await AsyncStorage.setItem(key, value, function (error) {
                    if (error) {
                        console.log('保存失败');
                    } else {
                        console.log('保存成功');
                    }
                });
            }
        } catch (error) {
            console.log(error);
        }
    },

    getKeyData: async (key) => {
        try {
            if (key) {
                // console.log('getKeyData')
                await AsyncStorage.getItem(key, function (error,result) {
                    if (error) {
                        console.log('读取失败');
                    } else {
                        console.log('读取成功',result);
                        return result;
                    }
                })
            }
        } catch (e) {
            console.log(e)
        }
    },

    deleteData: async (key) => {
        try {
            if (key) {
                await AsyncStorage.removeItem(key);
            }
        } catch (e) {
            console.log(e)
        }
    },
};
export default StoreUtil;