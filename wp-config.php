<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'rst_wp');

/** Имя пользователя MySQL */
define('DB_USER', 'root');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', '');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8mb4');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'o;Y0ih~n[o.zI%Yd8/7fMg7L6oMxtf~]<),wB-?pSl:t_1!JBpU:<X<A!S@75/sF');
define('SECURE_AUTH_KEY',  'a.lPUR?4cl!Fb04yo|Jw98*Ytl274;Y*.yGRRquNl8dn1h;<T;*;%Sqbn3FR2,Qa');
define('LOGGED_IN_KEY',    'f&7TV_V|n>)>~)C_AY.t+/Nz 65Qnv7eU7~(gf( dk8TF;}i8-=V9l>A-_(:v9O!');
define('NONCE_KEY',        '-Pc*s_CZZFzHwOg^$urRjeY]n>RlcV<%^>g7q4[]*pPF,/T`V/U2fY`3I,}03XpT');
define('AUTH_SALT',        '`9={tfUXLQSZ^IDCEpLPLc//Z{Yp++rSz,5uDOsj|jwQZ8pE8vo^B!ed)9m#x?#H');
define('SECURE_AUTH_SALT', '|R#Sw?OBY_~5F3j}p[.i>XtWdtd0 jV%8K|O6 rAY5,Qdv8(`^tJ${RGp1I7in@G');
define('LOGGED_IN_SALT',   '#M0dV;G/F.4%ZExgFl;].K(aVvV{YF(UZ:@uP r.iCnRRIasF25^g*{*0%#UpK` ');
define('NONCE_SALT',       '[-:J?J-vCMY!}]Xxl;Y$r]q%N*Xi|WIT0uM^K0_dtGP*rZ.L=S81t?%M5~A:)yQo');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 * 
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
