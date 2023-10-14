<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\notice;

class UserController extends Controller
{
    // function show ($id) {
    //     $text = $id;
    //     return $text; 
    // }
    
    function index(){
        return  DB::Select('Select * from users');
    }

    function getData () {
        return notice::all();
    }

    function acceptData(Request $req) {
        // print($req);
        $notice = new notice;
        $notice-> noticeContent = $req->input('noticeContent');
        $notice-> links = $req->input('links');
        $notice-> noticeTitle = $req->input('noticeTitle');
        $notice->save();

        return response ()-> json([
            'status' => 200,
            'message' => 'Notice added in DB Successfully'
        ]);

    }
}
