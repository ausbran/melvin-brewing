<?php

use craft\helpers\StringHelper;

return [
    'assets/edit/<elementId:\d+><filename:(?:-[^\/]*)?>' => 'elements/edit',
    'assets' => 'assets/index',
    'assets/<defaultSource:{handle}(\/.*)?>' => 'assets/index',
    'categories' => 'categories/category-index',
    'categories/<groupHandle:{handle}>' => 'categories/category-index',
    'categories/<groupHandle:{handle}>/new' => 'categories/create',
    'categories/<groupHandle:{handle}>/<elementId:\d+><slug:(?:-[^\/]*)?>' => 'elements/edit',
    'dashboard' => 'dashboard/index',
    'edit/<elementId:\d+>' => 'elements/redirect',
    'edit/<elementUid:' . StringHelper::UUID_PATTERN . '>' => 'elements/redirect',
    'entries/<sectionHandle:{handle}>' => ['template' => 'entries'],
    'entries/<section:{handle}>/new' => 'entries/create',
    'entries/<section:{handle}>/<elementId:\d+><slug:(?:-[^\/]*)?>' => 'elements/edit',
    'entries/<section:{handle}>/<elementId:\d+><slug:(?:-[^\/]*)?>/revisions' => 'elements/revisions',
    'globals' => 'globals',
    'globals/<globalSetHandle:{handle}>' => 'globals/edit-content',
    'graphiql' => 'graphql/graphiql',
    'graphql' => 'graphql/cp-index',
    'graphql/schemas' => 'graphql/view-schemas',
    'graphql/schemas/new' => 'graphql/edit-schema',
    'graphql/schemas/<schemaId:\d+>' => 'graphql/edit-schema',
    'graphql/schemas/public' => 'graphql/edit-public-schema',
    'graphql/tokens' => 'graphql/view-tokens',
    'graphql/tokens/new' => 'graphql/edit-token',
    'graphql/tokens/<tokenId:\d+>' => 'graphql/edit-token',
    'myaccount' => [
        'route' => 'users/edit-user',
        'defaults' => ['userId' => 'current'],
    ],
    'update' => 'updater',
    'settings/assets' => 'volumes/volume-index',
    'settings/assets/volumes/new' => 'volumes/edit-volume',
    'settings/assets/volumes/<volumeId:\d+>' => 'volumes/edit-volume',
    'settings/assets/transforms' => 'image-transforms/index',
    'settings/assets/transforms/new' => 'image-transforms/edit',
    'settings/assets/transforms/<transformHandle:{handle}>' => 'image-transforms/edit',
    'settings/categories' => 'categories/group-index',
    'settings/categories/new' => 'categories/edit-category-group',
    'settings/categories/<groupId:\d+>' => 'categories/edit-category-group',
    'settings/email' => 'system-settings/edit-email-settings',
    'settings/fields/<groupId:\d+>' => ['template' => 'settings/fields'],
    'settings/fields/new' => 'fields/edit-field',
    'settings/fields/edit/<fieldId:\d+>' => 'fields/edit-field',
    'settings/filesystems' => 'fs/index',
    'settings/filesystems/new' => 'fs/edit',
    'settings/filesystems/<handle:{handle}>' => 'fs/edit',
    'settings/general' => 'system-settings/general-settings',
    'settings/globals/new' => 'system-settings/edit-global-set',
    'settings/globals/<globalSetId:\d+>' => 'system-settings/edit-global-set',
    'settings/plugins/<handle>' => 'plugins/edit-plugin-settings',
    'settings/routes' => [
        'template' => 'settings/routes',
        'variables' => [
            'tokens' => [
                'year' => '\d{4}',
                'month' => '(?:0?[1-9]|1[012])',
                'day' => '(?:0?[1-9]|[12][0-9]|3[01])',
                'number' => '\d+',
                'page' => '\d+',
                'uid' => StringHelper::UUID_PATTERN,
                'slug' => '[^\/]+',
                'tag' => '[^\/]+',
                '*' => '[^\/]+',
            ],
        ],
    ],
    'settings/sections' => 'sections/index',
    'settings/sections/new' => 'sections/edit-section',
    'settings/sections/<sectionId:\d+>' => 'sections/edit-section',
    'settings/sections/<sectionId:\d+>/entrytypes' => 'sections/entry-types-index',
    'settings/sections/<sectionId:\d+>/entrytypes/new' => 'sections/edit-entry-type',
    'settings/sections/<sectionId:\d+>/entrytypes/<entryTypeId:\d+>' => 'sections/edit-entry-type',
    'settings/sites' => 'sites/settings-index',
    'settings/sites/new' => 'sites/edit-site',
    'settings/sites/<siteId:\d+>' => 'sites/edit-site',
    'settings/tags' => 'tags/index',
    'settings/tags/new' => 'tags/edit-tag-group',
    'settings/tags/<tagGroupId:\d+>' => 'tags/edit-tag-group',
    'settings/users' => ['template' => 'settings/users/fields'],
    'utilities' => 'utilities',
    'utilities/<id:[\w\-]+><extra:(\/.*)?>' => 'utilities/show-utility',
    'plugin-store' => 'plugin-store',
    'plugin-store/callback' => 'plugin-store/callback',
    'plugin-store/<url:(.*)>' => 'plugin-store',
];
