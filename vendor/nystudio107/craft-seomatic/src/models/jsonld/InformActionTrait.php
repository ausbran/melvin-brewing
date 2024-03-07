<?php

/**
 * SEOmatic plugin for Craft CMS
 *
 * A turnkey SEO implementation for Craft CMS that is comprehensive, powerful, and flexible
 *
 * @link      https://nystudio107.com
 * @copyright Copyright (c) nystudio107
 */

namespace nystudio107\seomatic\models\jsonld;

/**
 * schema.org version: v26.0-release
 * Trait for InformAction.
 *
 * @author    nystudio107
 * @package   Seomatic
 * @see       https://schema.org/InformAction
 */
trait InformActionTrait
{
    /**
     * Upcoming or past event associated with this place, organization, or action.
     *
     * @var array|Event|Event[]
     */
    public $event;
}
