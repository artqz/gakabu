<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Levels extends Model
{
    protected $fillable = [
        'level', 'required_coins', 'count_posts', 'count_comments',
    ];
}