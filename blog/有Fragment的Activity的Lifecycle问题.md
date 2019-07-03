## bug描述：
* 当系统内存不足，回收掉Activity时，Fragment中对于原Activity的引用均为null，此时重启Activity，将报错空指针异常
## bug原因：
* 系统在回收Activity时，并没有回收Fragment
## 解决方案：
* 在Activity中重写onSaveInstanceState方法，在Activity被回收时，将Fragment通过FragmentManager存储到outState中。这样的话，在初始化Fragment时，需要进行一次判断，代码如下：
```java
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        if (savedInstanceState == null) {
            mWeatherFragment = new WeatherFragment();
            mMultiCityFragment = new MultiCityFragment();
        } else {
            // get Fragment from FM
            mWeatherFragment = getSupportFragmentManager().getFragment(savedInstanceState, KEY_WEATHER);
            mMultiCityFragment = getSupportFragmentManager().getFragment(savedInstanceState, KEY_MULTI_CITY);
        }
    ...

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        // put Fragment in FragmentManager
        getSupportFragmentManager().putFragment(outState, KEY_MULTI_CITY, mMultiCityFragment);
        getSupportFragmentManager().putFragment(outState, KEY_WEATHER, mWeatherFragment);

    }
```    