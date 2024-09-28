<x-mail::message>
# Hi {{$user->name}}

<h1> Welcome in our E-learning Website</h1>

<x-mail::button :url="''">
Button Text
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
