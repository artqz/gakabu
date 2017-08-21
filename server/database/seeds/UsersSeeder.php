<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            ['username' => 'test', 'email' => 'test@test.ru', 'password' => bcrypt('110789')]
        ];

        User::insert($users);
    }
}
