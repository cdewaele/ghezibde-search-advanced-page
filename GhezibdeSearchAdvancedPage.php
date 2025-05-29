<?php

declare(strict_types=1);

namespace GhezibdeSearchAdvanced;

use Fisharebest\Webtrees\I18N;
use Fisharebest\Webtrees\Module\AbstractModule;
use Fisharebest\Webtrees\Module\ModuleCustomInterface;
use Fisharebest\Webtrees\Module\ModuleCustomTrait;
use Fisharebest\Webtrees\Module\ModuleGlobalTrait;
use Fisharebest\Webtrees\Module\ModuleGlobalInterface;
use Fisharebest\Webtrees\View;
use Fisharebest\Webtrees\Assets\JavascriptAsset;



class GhezibdeSearchAdvancedPage extends AbstractModule implements ModuleCustomInterface, ModuleGlobalInterface
{

    use ModuleCustomTrait;
    use ModuleGlobalTrait;

    public function __construct() {}

    public function boot(): void {}

    /**
     * Where does this module store its resources
     * 
     * @return string
     */
    public function resourcesFolder(): string
    {
        return __DIR__ . '/resources/';
    }

    public function bodyContent(): string
    {
        return '<script src="' . $this->assetUrl('js/ghezibde-search-advanced-page.js') . '"></script>';
    }

    public function headContent(): string
    {
        return '';
    }
    /**
     * How should this module be identified in the control panel, etc.?
     *
     * @return string
     */
    public function title(): string
    {
        // I18N: https://www.geonames.org
        return I18N::translate('Ghezibde Advanced search');
    }

    public function description(): string
    {
        return I18N::translate('Default search to CONTAINS for both given name and surname (instead of EXACT)');
    }

    public function customModuleAuthorName(): string
    {
        return 'Ghezibde';
    }

    public function customModuleVersion(): string
    {
        return '2.1.16.0';
    }

    public function customModuleLatestVersionUrl(): string
    {
        return 'https://github.com/cdewaele/ghezibde-search-advanced-page/raw/main/latest-version.txt';
    }
}
