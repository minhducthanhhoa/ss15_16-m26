import AboutView from "@/views/AboutView.vue"
import Home from "@/views/Baitap/bai1/Home.vue"
import Contact from "@/views/Baitap/bai2/Contact.vue"
import Register from "@/views/Baitap/bai3/Register.vue"
import Login from "@/views/Baitap/bai4/Login.vue"
import Detail from "@/views/Baitap/bai7/Detail.vue"
import Product from "@/views/Baitap/bai7/Product.vue"
import Account from "@/views/Baitap/bai8/Account.vue"
import Dashboard from "@/views/Baitap/bai8/Dashboard.vue"
import ContactView from "@/views/ContactView.vue"
import HomeView from "@/views/HomeView.vue"
import ProductDetail from "@/views/ProductDetail.vue"
import ProductReview from "@/views/ProductReview.vue"
import ProductView from "@/views/ProductView.vue"
import UseDetail from "@/views/UseDetail.vue"
import { createRouter, createWebHistory } from "vue-router"

// Định nghĩa các route 
const routes = [
    // {
    //     path: "/",
    //     name: "home",
    //     component: HomeView
    // },
    // {
    //     path: "/contact",
    //     name: "contact",
    //     component: ContactView
    // },
    // {
    //     path: "/about",
    //     name: "about",
    //     component: AboutView
    // },
    // {
    //     path: "/product-detail/:id",
    //     name: "productDetail",
    //     component: ProductDetail
    // },
    // {
    //     path: "/profile/:id",
    //     name: "useDetail",
    //     component: UseDetail
    // },
    // {
    //     path: "/product",
    //     name: "product",
    //     component: ProductView,
    //     children: [
    //         {
    //             path: "detail",
    //             name: "product-detail",
    //             component: ProductDetail
    //         },
    //         {
    //             path: "review",
    //             name: "product_revew",
    //             component: ProductReview            
    //         }
    //     ]

    // },
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact
    },
    {
        path: "/register",
        name: "register",
        component: Register
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: '/:pathMatch(.*)*', 
        name: 'NotFound',
        component: NotFound,
    },
    {
        path: "/product",
        name: "product",
        component: Product
    },
    {
        path: "/detail",
        name: "detail",
        component: Detail
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard
    },
    {
        path: "/account",
        name: "account",
        component: Account
    }
]

// Tạo cơ chế định tuyến cho ứng dụng
const router = createRouter({
    history: createWebHistory(),
    routes,
})

// Đẩy ra bên ngoài cho ứng dụng sử dung
export default router;