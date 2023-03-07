<template>
    <nav class="navbar bg-primary">
        <a class="navbar-brand text-white">
            <img src="@/assets/logo.png"
                 alt="Vue Logo"
                 height="24"
                 class="d-inline-block align-text-top mx-2">

            Navbar component
        </a>

        <div class="d-flex">
            <button class="btn btn-outline-info">
                <i class="fa fa-sign-out-alt"
                    @click="$router.push({ path:'/' })"
                >Volver
                </i>
            </button>
        </div>
    </nav>
</template>


