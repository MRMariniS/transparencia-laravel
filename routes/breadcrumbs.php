<?php // routes/breadcrumbs.php

// Note: Laravel will automatically resolve `Breadcrumbs::` without
// this import. This is nice for IDE syntax and refactoring.
use Diglactic\Breadcrumbs\Breadcrumbs;

// This import is also not required, and you could replace `BreadcrumbTrail $trail`
//  with `$trail`. This is nice for IDE type checking and completion.
use Diglactic\Breadcrumbs\Generator as BreadcrumbTrail;

// Home
Breadcrumbs::for('home', function (BreadcrumbTrail $trail) {
    $trail->push('Início', route('home'));
});

// Home > Blog
Breadcrumbs::for('estrutura', function (BreadcrumbTrail $trail) {
    $trail->parent('home');
    $trail->push('Estrutura Organizacional', route('estrutura.index'));
});

// Home > Blog
Breadcrumbs::for('publicacoes', function (BreadcrumbTrail $trail) {
    $trail->parent('home');
    $trail->push('Publicações', route('publicacoes.index'));
});
// // Home > Blog > [Category]
// Breadcrumbs::for('category', function (BreadcrumbTrail $trail, $category) {
//     $trail->parent('blog');
//     $trail->push($category->title, route('category', $category));
// });