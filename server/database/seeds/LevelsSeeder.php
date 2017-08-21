<?php

use Illuminate\Database\Seeder;
use App\Levels;

class LevelsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $levels = [
            ['level' => 0, 'required_coins' => 0, 'count_posts' => 1, 'count_comments' => 2],
            ['level' => 1, 'required_coins' => 150, 'count_posts' => 2, 'count_comments' => 5],
            ['level' => 2, 'required_coins' => 200, 'count_posts' => 3, 'count_comments' => 8],
            ['level' => 3, 'required_coins' => 250, 'count_posts' => 4, 'count_comments' => 10],
            ['level' => 4, 'required_coins' => 300, 'count_posts' => 5, 'count_comments' => 12],
            ['level' => 5, 'required_coins' => 350, 'count_posts' => 6, 'count_comments' => 14],
            ['level' => 6, 'required_coins' => 400, 'count_posts' => 7, 'count_comments' => 16],
            ['level' => 7, 'required_coins' => 450, 'count_posts' => 8, 'count_comments' => 18],
            ['level' => 8, 'required_coins' => 500, 'count_posts' => 9, 'count_comments' => 20],
            ['level' => 9, 'required_coins' => 550, 'count_posts' => 10, 'count_comments' => 22],
            ['level' => 10, 'required_coins' => 600, 'count_posts' => 10, 'count_comments' => 22],
            ['level' => 11, 'required_coins' => 650, 'count_posts' => 11, 'count_comments' => 24],
            ['level' => 12, 'required_coins' => 700, 'count_posts' => 12, 'count_comments' => 26],
            ['level' => 13, 'required_coins' => 750, 'count_posts' => 13, 'count_comments' => 28],
            ['level' => 14, 'required_coins' => 800, 'count_posts' => 14, 'count_comments' => 30],
            ['level' => 15, 'required_coins' => 850, 'count_posts' => 15, 'count_comments' => 32],
            ['level' => 16, 'required_coins' => 900, 'count_posts' => 16, 'count_comments' => 34],
            ['level' => 17, 'required_coins' => 950, 'count_posts' => 17, 'count_comments' => 36],
            ['level' => 18, 'required_coins' => 1000, 'count_posts' => 18, 'count_comments' => 38],
            ['level' => 19, 'required_coins' => 1100, 'count_posts' => 19, 'count_comments' => 40],
            ['level' => 20, 'required_coins' => 1200, 'count_posts' => 20, 'count_comments' => 40],
            ['level' => 21, 'required_coins' => 1400, 'count_posts' => 21, 'count_comments' => 42],
            ['level' => 22, 'required_coins' => 1600, 'count_posts' => 22, 'count_comments' => 44],
            ['level' => 23, 'required_coins' => 1800, 'count_posts' => 23, 'count_comments' => 46],
            ['level' => 24, 'required_coins' => 2000, 'count_posts' => 24, 'count_comments' => 48],
            ['level' => 25, 'required_coins' => 2300, 'count_posts' => 25, 'count_comments' => 50],
            ['level' => 26, 'required_coins' => 2600, 'count_posts' => 26, 'count_comments' => 52],
            ['level' => 27, 'required_coins' => 2900, 'count_posts' => 27, 'count_comments' => 54],
            ['level' => 28, 'required_coins' => 3500, 'count_posts' => 28, 'count_comments' => 56],
            ['level' => 29, 'required_coins' => 4000, 'count_posts' => 29, 'count_comments' => 58],
            ['level' => 30, 'required_coins' => 5000, 'count_posts' => 30, 'count_comments' => 60],
        ];

        Levels::insert($levels);

    }
}
