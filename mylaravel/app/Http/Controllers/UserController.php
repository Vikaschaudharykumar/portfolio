<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function store(Request $request)
    {
        // Validate incoming request
        $request->validate([
            'fullName' => 'required|string|max:255',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);

        // Create a new contact record
        User::create([
            'name' => $request->fullName,
            'email' => $request->email,
            'message' => $request->message,
        ]);

        // Return a response
        return response()->json(['message' => 'Contact saved successfully!'], 200);
    }
}
