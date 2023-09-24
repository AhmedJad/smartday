<?php

namespace App\Http\Requests\Web;

use Illuminate\Foundation\Http\FormRequest;

class BusinessConstractorRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "company_name" => "required",
            "manager_name" => "required",
            "phone" => "required",
            "email" => "required",
            "speciality" => "required",
            "area_id" => "required",
            "city_id" => "required",
            "commercial_register" => "nullable",
            "tax_register" => "nullable",
        ];
    }
}