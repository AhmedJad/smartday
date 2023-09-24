<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Repositories\BusinessContractorRepository;
use Illuminate\Support\Facades\Storage;

class BusinessContractorController extends Controller
{
    private $businessContractorRepository;
    public function __construct(BusinessContractorRepository $businessContractorRepository)
    {
        $this->middleware('auth:admin');
        $this->businessContractorRepository = $businessContractorRepository;
    }
    public function delete($id)
    {
        $brand = $this->businessContractorRepository->delete($id);
        if($brand->commercial_register){
            Storage::delete($brand->commercial_register);
        }
        if($brand->tax_register){
            Storage::delete($brand->tax_register);
        }
        return response()->json("Item with id : $brand->id deleted successfully");
    }

    public function index()
    {
        $text = isset(request()->text) ? request()->text : '';
        return $this->businessContractorRepository->getBusinessContractors($text, request()->page_size, request()->status);
    }
}
