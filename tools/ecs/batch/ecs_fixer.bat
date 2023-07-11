:: Run easy-coding-standard (ecs) via this batch file inside your IDE e.g. PhpStorm (Windows only)
:: Install inside PhpStorm the  "Batch Script Support" plugin
cd..
cd..
cd..
cd..
cd..
cd..
php vendor\bin\ecs check vendor/markocupic/contao-theme-sac-pilatus/src --fix --config vendor/markocupic/contao-theme-sac-pilatus/tools/ecs/config.php
php vendor\bin\ecs check vendor/markocupic/contao-theme-sac-pilatus/contao/templates --fix --config vendor/markocupic/contao-theme-sac-pilatus/tools/ecs/config.php
php vendor\bin\ecs check vendor/markocupic/contao-theme-sac-pilatus/config --fix --config vendor/markocupic/contao-theme-sac-pilatus/tools/ecs/config.php
php vendor\bin\ecs check vendor/markocupic/contao-theme-sac-pilatus/tests --fix --config vendor/markocupic/contao-theme-sac-pilatus/tools/ecs/config.php
