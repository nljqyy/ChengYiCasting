@echo off
chcp 65001 >nul
echo ========================================
echo    诚毅公司官网 - 快速配置工具
echo ========================================
echo.

:menu
echo 请选择操作：
echo   1. 启动开发服务器
echo   2. 构建生产版本
echo   3. 打开公司信息配置文件
echo   4. 打开中文语言包
echo   5. 打开英文语言包
echo   6. 打开样式变量文件
echo   7. 查看资源文件夹结构
echo   8. 退出
echo.
set /p choice=请输入选项编号 (1-8):

if "%choice%"=="1" goto dev
if "%choice%"=="2" goto build
if "%choice%"=="3" goto config
if "%choice%"=="4" goto zhCN
if "%choice%"=="5" goto enUS
if "%choice%"=="6" goto style
if "%choice%"=="7" goto assets
if "%choice%"=="8" goto exit

echo 无效选项，请重新选择！
goto menu

:dev
echo.
echo 正在启动开发服务器...
call npm run dev
goto menu

:build
echo.
echo 正在构建生产版本...
call npm run build
echo.
echo 构建完成！输出目录：dist/
pause
goto menu

:config
echo.
echo 正在打开公司信息配置文件...
start notepad "src\config\company.json"
goto menu

:zhCN
echo.
echo 正在打开中文语言包...
start notepad "src\i18n\locales\zh-CN.json"
goto menu

:enUS
echo.
echo 正在打开英文语言包...
start notepad "src\i18n\locales\en-US.json"
goto menu

:style
echo.
echo 正在打开样式变量文件...
start notepad "src\styles\variables.scss"
goto menu

:assets
echo.
echo 正在打开资源文件夹...
explorer "public\assets"
goto menu

:exit
echo.
echo 感谢使用！再见！
timeout /t 2 >nul
exit