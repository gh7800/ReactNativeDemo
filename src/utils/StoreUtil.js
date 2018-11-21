/**
 * 数据存储
 */
import { AsyncStorage } from 'react-native';

// noinspection JSAnnotator
const StoreUtil = {
    insertData: async (key, value) => {
        try {
            if (key && value) {
                await AsyncStorage.setItem(key, value, function (error) {
                    if (error) {
                        console.log('保存失败:',error);
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
                return await AsyncStorage.getItem(key);
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