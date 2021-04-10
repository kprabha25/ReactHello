https://www.pluralsight.com/guides/getting-started-with-reactnative-on-android
# ReactHello
First React Native App  

# Create App  
npx react-native init ReactHello  
--------------------
                  Welcome to React Native!
                 Learn once, write anywhere

√ Downloading template
√ Copying template
√ Processing template
√ Installing dependencies

  Run instructions for iOS:
    • cd "E:\Prabha\Local\ReactHello" && npx react-native run-ios
    - or -
    • Open ReactHello\ios\ReactHello.xcodeproj in Xcode or run "xed -b ios"
    • Hit the Run button

  Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd "E:\Prabha\Local\ReactHello" && npx react-native run-android

  Run instructions for Windows and macOS:
    • See https://aka.ms/ReactNative for the latest up-to-date instructions.

--------------------

# Error : Gradle

# Solution : Changed classpath gradle version from 3.5.3 to 6.7
File : "build.gradle "
 dependencies {
        //classpath("com.android.tools.build:gradle:3.5.3")
        classpath("com.android.tools.build:gradle:6.7")
        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
---------------
# Error  : 
java.lang.NoClassDefFoundError: Could not initialize class org.codehaus.groovy.vmplugin.v7.Java7  

## Solution :   
https://stackoverflow.com/questions/60753248/issue-in-setting-up-the-android-emulator-with-react-native  
https://gradle.org/releases/ , https://gradle.org/install/  

------------------

# Error : 
could not initialize class org.codehaus.groovy.vmplugin.v7.java7 react native

## Solution :  Set JAVA_HOME in Windows 10, through Environment Variable 

1. Add New "JAVA_HOME" in System Varialbe - C:\Program Files\Java\jdk-15.0.1
2. Add New user variable "ANDROID_HOME"  - C:\Users\Admin\AppData\Local\Android\Sdk
3. Edit Path on System Variable - Add - %JAVA_HOME%\bin
https://javatutorial.net/set-java-home-windows-10

## Gradle Setup : 

How to Configure Gradle on Windows Machine? - https://www.youtube.com/watch?v=_XcO_BujfeQ
https://docs.gradle.org/current/userguide/installation.html
https://www.360logica.com/blog/how-to-configure-gradle-on-windows-machine/ - Failed Instruction
Note : We should only give the gradle bin location into to user variables PATH: C:\Gradle\bin. Not in the System Variables
Check cmd as administrator : gradle -version

# Error : 
Could not initialize class org.codehaus.groovy.runtime.InvokerHelper

# Solution : 
File : android/gradle/wrapper/gradle-wrapper.properties
changed :
distributionUrl=https\://services.gradle.org/distributions/gradle-6.2-all.zip
TO
distributionUrl=https\://services.gradle.org/distributions/gradle-6.7-all.zip
-------------
# Error : 
Could not initialize class org.codehaus.groovy.vmplugin.v7.Java7
Could not initialize class org.codehaus.groovy.reflection.ReflectionCache

# Solution
gradle clean build

# Error : Error: `createBottomTabNavigator()` has been moved to `react-navigation-tabs`. See https://reactnavigation.org/docs/bottom-tab-navigator.html for more details.

# Soution : 

https://reactnative.dev/docs/navigation

expo install / npm install --save react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view


+ react-native-screens@3.1.0
+ react-native-gesture-handler@1.10.3
+ @react-native-community/masked-view@0.1.10
+ react-native-reanimated@2.1.0
+ react-native-safe-area-context@3.2.0

Removed react-native-screens react-navigation react-navigation-stack react-navigation-tabs

# Error Unable to resolve module react-navigation from C:\Prabha\Dev\React Native\ReactHello\Nav.js: react-navigation could not be found within the project.

Unable to resolve module react-navigation-stack from C:\Prabha\Dev\React Native\ReactHello\Nav.js: react-navigation-stack could not be found within the project.

# Solution : 
npm install --save react-navigation react-navigation-stack react-navigation-tabs

https://medium.com/weekly-webtips/adding-react-navigation-to-your-react-native-app-488dfaf271a6

videoscreen  :
//https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4
//{return <MovieCard key={index} image={data.image}></MovieCard>;}
//{return <SmallCard key={index} image={data.image}></SmallCard>;}

# Image Isseue : 
https://medium.com/swlh/how-to-obtain-a-uri-for-an-image-asset-in-react-native-with-expo-88dfbe1023b8