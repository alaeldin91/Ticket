<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthnicationController extends Controller
{
    public function registerCustomer(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'string'],
            'password' => ['required', 'min:4'],
            'password_confirmation' => 'required|same:password'
        ]);
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        if ($user->save()) {
            return response()->json(['message' => 'the Successfull Registered', 'status_code' => 201], 201);
        } else {
            return response()->json(['message' => 'the Error Occured', 500], 500);
        }
    }
    public function loginAdmin(Request $request)
    {
        $request->validate([
            'email' => ['required'],
            'password' => ['required'],
            'remeber_me' => 'boolean'
        ]);
        if (!Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return response()->json(['message' => 'unAuthorized', 'status_code' => 401], 401);
        }

        $user = $request->user();

        if ($user->role === 'admin') {
            $tokenData = $user->createToken(' personal access tokens', ['do-anything']);
        } else {
            return response()->json(['message' => 'Sorry u are not admin', 'status_code' => 401], 401);
        }
        $token = $tokenData->token;
        if ($request->remeber_me) {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }
        if ($token->save()) {
            return response()->json(['user' => $user, 'access_token' => $tokenData->accessToken, 'token_type' => 'Bearer', 'token_scope' => $tokenData->token->scopes[0], 'expires_at' => Carbon::parse($tokenData->token->expires_at)->toDateTimeString(), 'staus_code' => 200], 200);
        } else {
            return response()->json(['message' => 'some error please try again', 'status_code' => 500], 500);
        }
    }


    public function loginCustomer(Request $request)
    {
        $request->validate([
            'email' => ['required'],
            'password' => ['required'],
            'remeber_me' => 'boolean'
        ]);
        if (!Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return response()->json(['message' => 'unAuthorized', 'status_code' => 401], 401);
        }
        $user = $request->user();
        if ($user->role === 'customer') {
            $tokenData = $user->createToken('personal access tokens', ['can-create']);
        } else {
            return response()->json(['message' => 'Sorry u are not admin', 'status_code' => 401], 401);
        }
        $token = $tokenData->token;
        if ($request->remeber_me) {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }
        if ($token->save()) {
            return response()->json(['user' => $user, 'access_token' => $tokenData->accessToken, 'token_type' => 'Bearer', 'token_scope' => $tokenData->token->scopes[0], 'expires_at' => Carbon::parse($tokenData->token->expires_at)->toDateTimeString(), 'staus_code' => 200], 200);
        } else {
            return response()->json(['message' => 'some error please try again', 'status_code' => 500], 500);
        }
    }
    public function logoutCustomer(Request $request){
        $request->user()->token()->revoke();

        return response()->json(['message'=>'Logout Successfully','status_code'=>200],200);
    }
}
