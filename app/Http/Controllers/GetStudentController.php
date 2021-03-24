<?php

namespace App\Http\Controllers;

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;

class GetStudentController extends Controller
{
    public function LogIn($username, $passwd)
    {
        $u = User::where(['username' => $username])->get();
        return $u;
    }

    public function GetCheckIn($username)
    {
        $u = User::where(['username' => $username])->get()[0]->id;
        $obj = \App\Models\OnClassRooms::with(
            'student_id',
            'room_id',
            'room_id.subject_id',
            'room_id.teach_id.user_id'
        )->where(['student_id' => $u])->get();

        return $obj;
    }

    public function CheckInRoom($id, $username)
    {
        $user_id = User::where(['username' => $username])->get()[0]->id;
        $s = \App\Models\SubjectRooms::where(['id' => $id])->get()[0];
        $str_date = $s->room_date . ' ' . $s->room_time;
        $check_date = Carbon::createFromFormat('Y-m-d H:i:s', $str_date);
        $current_date = Carbon::now('Asia/Bangkok')->toDateTimeString();
        $time_register = Carbon::createFromFormat('Y-m-d H:i:s', $current_date);
        $num = \App\Models\OnClassRooms::where(['student_id' => $user_id])->count() + 1;
        $data = [
            'student_id' => $user_id,
            'room_id' => $id,
            'at_date' => $time_register,
            'at_time' => $time_register,
            'rounds' => $num,
            'is_absent' => $check_date->lt($time_register),
        ];

        \App\Models\OnClassRooms::create($data);

        $obj = \App\Models\OnClassRooms::with(
            'student_id',
            'room_id',
            'room_id.subject_id',
            'room_id.teach_id.user_id'
        )->where(['room_id' => $id])->get();

        $data['rooms'] = $obj;
        return $data;
    }
}