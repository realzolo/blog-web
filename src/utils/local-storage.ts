const LocalStorageUtil = {
    setItem(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getItem(key: string) {
        return JSON.parse(localStorage.getItem(key) as string);
    },
    delItem(key: string) {
        localStorage.removeItem(key);
    }
}
export default LocalStorageUtil;