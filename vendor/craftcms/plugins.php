<?php

$vendorDir = dirname(__DIR__);
$rootDir = dirname(dirname(__DIR__));

return array (
  'craftcms/ckeditor' => 
  array (
    'class' => 'craft\\ckeditor\\Plugin',
    'basePath' => $vendorDir . '/craftcms/ckeditor/src',
    'handle' => 'ckeditor',
    'aliases' => 
    array (
      '@craft/ckeditor' => $vendorDir . '/craftcms/ckeditor/src',
    ),
    'name' => 'CKEditor',
    'version' => '4.0.3',
    'description' => 'Edit rich text content in Craft CMS using CKEditor.',
    'developer' => 'Pixel & Tonic',
    'developerUrl' => 'https://pixelandtonic.com/',
    'developerEmail' => 'support@craftcms.com',
    'documentationUrl' => 'https://github.com/craftcms/ckeditor/blob/master/README.md',
  ),
  'craftsnippets/craft-image-toolbox' => 
  array (
    'class' => 'craftsnippets\\imagetoolbox\\ImageToolbox',
    'basePath' => $vendorDir . '/craftsnippets/craft-image-toolbox/src',
    'handle' => 'image-toolbox',
    'aliases' => 
    array (
      '@craftsnippets/imagetoolbox' => $vendorDir . '/craftsnippets/craft-image-toolbox/src',
    ),
    'name' => 'Image toolbox',
    'version' => '3.0.0',
    'description' => 'Image toolbox',
    'developer' => 'Piotr Pogorzelski',
    'developerUrl' => 'http://craftsnippets.com/',
    'documentationUrl' => 'http://craftsnippets.com/docs/image-toolbox/',
    'changelogUrl' => 'https://github.com/craft-snippets/Craft-image-toolbox/blob/master/CHANGELOG.md',
    'components' => 
    array (
      'imageToolboxService' => 'craftsnippets\\imagetoolbox\\services\\ImageToolboxService',
    ),
  ),
  'craftcms/redactor' => 
  array (
    'class' => 'craft\\redactor\\Plugin',
    'basePath' => $vendorDir . '/craftcms/redactor/src',
    'handle' => 'redactor',
    'aliases' => 
    array (
      '@craft/redactor' => $vendorDir . '/craftcms/redactor/src',
    ),
    'name' => 'Redactor',
    'version' => '4.0.0',
    'description' => 'Edit rich text content in Craft CMS using Redactor by Imperavi.',
    'developer' => 'Pixel & Tonic',
    'developerUrl' => 'https://pixelandtonic.com/',
    'developerEmail' => 'support@craftcms.com',
    'documentationUrl' => 'https://github.com/craftcms/redactor/blob/v2/README.md',
  ),
  'spicyweb/craft-neo' => 
  array (
    'class' => 'benf\\neo\\Plugin',
    'basePath' => $vendorDir . '/spicyweb/craft-neo/src',
    'handle' => 'neo',
    'aliases' => 
    array (
      '@benf/neo' => $vendorDir . '/spicyweb/craft-neo/src',
    ),
    'name' => 'Neo',
    'version' => '5.0.0-beta.6',
    'schemaVersion' => '5.0.0.1',
    'description' => 'A Matrix-like field type that uses existing fields',
    'developer' => 'Spicy Web',
    'developerUrl' => 'https://github.com/spicywebau',
    'documentationUrl' => 'https://github.com/spicywebau/craft-neo/blob/5.0.0-beta.6/README.md',
    'changelogUrl' => 'https://github.com/spicywebau/craft-neo/blob/5.x/CHANGELOG.md',
    'downloadUrl' => 'https://github.com/spicywebau/craft-neo/archive/refs/tags/5.0.0-beta.6.zip',
  ),
  'verbb/field-manager' => 
  array (
    'class' => 'verbb\\fieldmanager\\FieldManager',
    'basePath' => $vendorDir . '/verbb/field-manager/src',
    'handle' => 'field-manager',
    'aliases' => 
    array (
      '@verbb/fieldmanager' => $vendorDir . '/verbb/field-manager/src',
    ),
    'name' => 'Field Manager',
    'version' => '4.0.0-beta.1',
    'description' => 'Manage your fields and field groups with ease.',
    'developer' => 'Verbb',
    'developerUrl' => 'https://verbb.io',
    'developerEmail' => 'support@verbb.io',
    'documentationUrl' => 'https://github.com/verbb/field-manager',
    'changelogUrl' => 'https://raw.githubusercontent.com/verbb/field-manager/craft-5/CHANGELOG.md',
  ),
  'verbb/navigation' => 
  array (
    'class' => 'verbb\\navigation\\Navigation',
    'basePath' => $vendorDir . '/verbb/navigation/src',
    'handle' => 'navigation',
    'aliases' => 
    array (
      '@verbb/navigation' => $vendorDir . '/verbb/navigation/src',
    ),
    'name' => 'Navigation',
    'version' => '3.0.0-beta.3',
    'description' => 'Create navigation menus for your site.',
    'developer' => 'Verbb',
    'developerUrl' => 'https://verbb.io',
    'developerEmail' => 'support@verbb.io',
    'documentationUrl' => 'https://github.com/verbb/navigation',
    'changelogUrl' => 'https://raw.githubusercontent.com/verbb/navigation/craft-5/CHANGELOG.md',
  ),
  'nystudio107/craft-seomatic' => 
  array (
    'class' => 'nystudio107\\seomatic\\Seomatic',
    'basePath' => $vendorDir . '/nystudio107/craft-seomatic/src',
    'handle' => 'seomatic',
    'aliases' => 
    array (
      '@nystudio107/seomatic' => $vendorDir . '/nystudio107/craft-seomatic/src',
    ),
    'name' => 'SEOmatic',
    'version' => '5.0.2',
    'description' => 'SEOmatic facilitates modern SEO best practices & implementation for Craft CMS 5. It is a turnkey SEO system that is comprehensive, powerful, and flexible.',
    'developer' => 'nystudio107',
    'developerUrl' => 'https://nystudio107.com',
    'documentationUrl' => 'https://nystudio107.com/docs/seomatic/',
  ),
);
