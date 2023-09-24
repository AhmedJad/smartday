<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Requests\Web\BusinessConstractorRequest;
use App\Repositories\BusinessContractorRepository;

class BusinessContractorController extends Controller
{
    private $businessContractorRepository;
    public function __construct(BusinessContractorRepository $businessContractorRepository)
    {
        $this->businessContractorRepository = $businessContractorRepository;
    }
    public function store(BusinessConstractorRequest $request)
    {
        $input = $request->validated();

        if ($request->file("commercial_register")) {
            $input["commercial_register"] = $request->file("commercial_register")->store("");
        }
        if ($request->file("tax_register")) {
            $input["tax_register"] = $request->file("tax_register")->store("");
        }
        $brand = $this->businessContractorRepository->store($input);
        return response()->json("Item created successfully with id : $brand->id");
    }

    public function getAreas()
    {
        return $this->businessContractorRepository->getAreas();
    }
    public function getCities()
    {
        return $this->businessContractorRepository->getCities();
    }
}
