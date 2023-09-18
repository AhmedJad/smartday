<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\BaseCategory;
use App\Models\Category;
use App\Models\Hub;
use App\Models\Product;

class ProductController extends Controller
{
    public function __construct()
    {
    }

    public function getCategories()
    {
        $id = request()->id;
        return BaseCategory::when($id, function ($q) use ($id) {
            return $q->where("id", $id);
        })->with(["products.whiteMediaManager", "products.blackMediaManager", "mediaManager"])->get();
    }
    public function getBaseCategories()
    {
        return BaseCategory::limit(4)->get();
    }
    public function getProducts()
    {
        $category_id = request()->category_id;
        $page_size = request()->page_size;
        return Product::when($category_id !== null, function ($q) use ($category_id) {
            $q->where("base_category_id", $category_id);
        })->with(["blackMediaManager", "whiteMediaManager"])->orderBy("id", "desc")->paginate($page_size);
    }
    public function getHubs(){
        return Hub::get();
    }
}
