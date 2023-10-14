<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class notice extends Model
{
    use HasFactory;
    public $table = 'notices';
    public $fillable = [
        'noticeContent',
        'links',
        'noticeTitle'
    ];
}
