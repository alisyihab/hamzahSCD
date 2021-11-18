<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreKonsumerKeyRequest extends FormRequest
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
            "app_name" => "required|max:50|string"
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'app_name.required' => 'Nama aplikasi tidak boleh kosong',
            'app_name.max' => 'Panjang maksimal Nama Aplikasi 50 karakter',
            'app_name.string' => 'Nama Aplikasi harus berupa Alfabet / Angka',
        ];
    }
}
