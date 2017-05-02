# Web-калькулятор с использованием библиотеки Link(Sencha Touch​ ​2)[https://mail.google.com/mail/u/0/%E2%80%8Bhttp://www.sencha.com/products/touch/]

### Требование
Калькулятор должен иметь как минимум 3 специальных функций, таких как `Sinus`.
__Результат:__ link(/ExtJsCalc/)[https://github.com/aturay/SenchaTouchCalc/tree/master/ExtJsCalc]

### Требование 2
На основе текущего(*link(/ExtJsCalc/)[https://github.com/aturay/SenchaTouchCalc/tree/master/ExtJsCalc]*) кода необходимо реализовать следующие действия:

+ необходимо задействовать библиотеку __sencha touch__ вместо Ext.js;
+ калькулятор должен поддерживать 2 режима - __обычный__ и __инженерный__ 
+ переход должен осуществляться с помощью link("карусели")[https://cdn.sencha.com/touch/sencha-touch-2.4.1/examples/kitchensink/index.html#demo/carousel] 
+ Операции `sin`, `cos`, `tan`, `rand` должны быть доступны только в __инженерном__ режиме;
+ невозможные операции (деление на ноль и т.д.) должны приводить к возникновению `alert`'а с link(текстом ошибки)[https://cdn.sencha.com/touch/sencha-touch-2.4.1/examples/kitchensink/index.html#demo/overlays]
+ последняя нажатая кнопка должна отличаться по цвету от других кнопок;
+ во всех режимах работы должна быть кнопка __включения/выключения аудио__.

__Результат:__ link(/ExtJsCalc/)[https://github.com/aturay/SenchaTouchCalc/tree/master/TouchCalc]