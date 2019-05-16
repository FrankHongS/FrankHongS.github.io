 如果APP的target API为26或以上，系统会限制后台service的执行。而service分为三种，Foreground，Background，Bound

* Foreground在执行时需要发一个通知显示出来。
* 在有后台service限制的情况下，如果APP在前台运行时，后台service仍可以被执行几分钟；当APP退到后台时，系统将停止service，停止的过程与service本身调用stopSelf()一致。
* Bound Service是可以让service和其他组件（比如Activity）进行通信，甚至还可以和其他应用通信（跨进程）。如果与该service绑定的组件解绑或销毁了，它将也被销毁。

> **后台长期耗时任务和定时任务的解决方案**
> 
> **Foreground**  
> **JobScheduler**  
> **AlarmManager**  
> **WorkManager**

