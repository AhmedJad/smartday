<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Requests\Web\InstallRequest;
use App\Repositories\InstallRepository;
use Illuminate\Support\Str;

class InstallController extends Controller
{
    private $installRepository;
    public function __construct(InstallRepository $installRepository)
    {
        $this->installRepository = $installRepository;
    }
    public function store(InstallRequest $request)
    {
        $input = $request->validated();
        $input["serial"] = "#SD-Store:" . substr(Str::uuid(), 0, 5);
        $brand = $this->installRepository->store($input);
        return response()->json("Item created successfully with id : $brand->id");
    }
    public function getAreas()
    {
        return $this->installRepository->getAreas();
    }
    public function getCities()
    {
        return $this->installRepository->getCities();
    }
}
