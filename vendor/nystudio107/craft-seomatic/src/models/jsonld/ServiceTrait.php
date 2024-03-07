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
 * Trait for Service.
 *
 * @author    nystudio107
 * @package   Seomatic
 * @see       https://schema.org/Service
 */
trait ServiceTrait
{
    /**
     * Indicates an OfferCatalog listing for this Organization, Person, or
     * Service.
     *
     * @var array|OfferCatalog|OfferCatalog[]
     */
    public $hasOfferCatalog;

    /**
     * A pointer to another, somehow related product (or multiple products).
     *
     * @var array|Product|Product[]|array|Service|Service[]
     */
    public $isRelatedTo;

    /**
     * A pointer to another, functionally similar product (or multiple products).
     *
     * @var array|Product|Product[]|array|Service|Service[]
     */
    public $isSimilarTo;

    /**
     * A slogan or motto associated with the item.
     *
     * @var string|array|Text|Text[]
     */
    public $slogan;

    /**
     * An award won by or for this item.
     *
     * @var string|array|Text|Text[]
     */
    public $award;

    /**
     * A review of the item.
     *
     * @var array|Review|Review[]
     */
    public $review;

    /**
     * Human-readable terms of service documentation.
     *
     * @var string|array|Text|Text[]|array|URL|URL[]
     */
    public $termsOfService;

    /**
     * The brand(s) associated with a product or service, or the brand(s)
     * maintained by an organization or business person.
     *
     * @var array|Organization|Organization[]|array|Brand|Brand[]
     */
    public $brand;

    /**
     * An entity that arranges for an exchange between a buyer and a seller.  In
     * most cases a broker never acquires or releases ownership of a product or
     * service involved in an exchange.  If it is not clear whether an entity is a
     * broker, seller, or buyer, the latter two terms are preferred.
     *
     * @var array|Person|Person[]|array|Organization|Organization[]
     */
    public $broker;

    /**
     * An associated logo.
     *
     * @var array|URL|URL[]|array|ImageObject|ImageObject[]
     */
    public $logo;

    /**
     * Indicates the mobility of a provided service (e.g. 'static', 'dynamic').
     *
     * @var string|array|Text|Text[]
     */
    public $providerMobility;

    /**
     * The geographic area where a service or offered item is provided.
     *
     * @var string|array|Text|Text[]|array|Place|Place[]|array|AdministrativeArea|AdministrativeArea[]|array|GeoShape|GeoShape[]
     */
    public $areaServed;

    /**
     * An offer to provide this item—for example, an offer to sell a product,
     * rent the DVD of a movie, perform a service, or give away tickets to an
     * event. Use [[businessFunction]] to indicate the kind of transaction
     * offered, i.e. sell, lease, etc. This property can also be used to describe
     * a [[Demand]]. While this property is listed as expected on a number of
     * common types, it can be used in others. In that case, using a second type,
     * such as Product or a subtype of Product, can clarify the nature of the
     * offer.
     *
     * @var array|Demand|Demand[]|array|Offer|Offer[]
     */
    public $offers;

    /**
     * The geographic area where the service is provided.
     *
     * @var array|AdministrativeArea|AdministrativeArea[]|array|GeoShape|GeoShape[]|array|Place|Place[]
     */
    public $serviceArea;

    /**
     * An intended audience, i.e. a group for whom something was created.
     *
     * @var array|Audience|Audience[]
     */
    public $audience;

    /**
     * A means of accessing the service (e.g. a phone bank, a web site, a
     * location, etc.).
     *
     * @var array|ServiceChannel|ServiceChannel[]
     */
    public $availableChannel;

    /**
     * A category for the item. Greater signs or slashes can be used to informally
     * indicate a category hierarchy.
     *
     * @var string|array|Text|Text[]|array|URL|URL[]|array|CategoryCode|CategoryCode[]|array|PhysicalActivityCategory|PhysicalActivityCategory[]|array|Thing|Thing[]
     */
    public $category;

    /**
     * The hours during which this service or contact is available.
     *
     * @var array|OpeningHoursSpecification|OpeningHoursSpecification[]
     */
    public $hoursAvailable;

    /**
     * The overall rating, based on a collection of reviews or ratings, of the
     * item.
     *
     * @var array|AggregateRating|AggregateRating[]
     */
    public $aggregateRating;

    /**
     * The audience eligible for this service.
     *
     * @var array|Audience|Audience[]
     */
    public $serviceAudience;

    /**
     * The tangible thing generated by the service, e.g. a passport, permit, etc.
     *
     * @var array|Thing|Thing[]
     */
    public $serviceOutput;

    /**
     * The service provider, service operator, or service performer; the goods
     * producer. Another party (a seller) may offer those services or goods on
     * behalf of the provider. A provider may also serve as the seller.
     *
     * @var array|Person|Person[]|array|Organization|Organization[]
     */
    public $provider;

    /**
     * The tangible thing generated by the service, e.g. a passport, permit, etc.
     *
     * @var array|Thing|Thing[]
     */
    public $produces;

    /**
     * The type of service being offered, e.g. veterans' benefits, emergency
     * relief, etc.
     *
     * @var string|array|GovernmentBenefitsType|GovernmentBenefitsType[]|array|Text|Text[]
     */
    public $serviceType;

    /**
     * Certification information about a product, organization, service, place, or
     * person.
     *
     * @var array|Certification|Certification[]
     */
    public $hasCertification;
}
