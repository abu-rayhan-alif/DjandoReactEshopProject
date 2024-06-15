from django.urls import path
from book import views
from django.conf import settings
from django.conf.urls.static import static






urlpatterns = [
    
    path('products/',views.getProducts,name='products'),
    #path('product/<str:pk>/',views.getProductById,name='product'),
    path('product/<str:pk>/', views.getProductById, name='product'),
    
    path('create/',views.createProduct,name='product-create'),
    path('<str:pk>/reviews/',views.createProductReview,name='create-review'),
    path('top/', views.getTopProducts, name='top'),

    path('update/<str:pk>/',views.updateProduct,name='product-update'),
    path('product/delete/<str:pk>/',views.deleteProduct,name='product-delete'),
    path('upload/',views.uploadImage,name='image-upload'),

    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/',views.registerUser,name='register'),

    path('user/profile/',views.getUserProfile,name='user-profile'),
    path('profile/update/',views.updateUserProfile,name='user-profile-update'),

    path('users',views.getUsers,name='users'),
    path('user/<str:pk>/', views.getUserById, name='user'),
    
    path('users/update/<str:pk>/',views.updateUser,name='users-update'),
    path('user/delete/<str:pk>/',views.deleteUser,name='user-delete'),
   
    
    path('orders/',views.getOrders,name='orders'),
    path('add/',views.addOrderItems,name='orders-add'),
    path('myorders/',views.getMyOrders,name='myorders'),
    path('<str:pk>/deliver/',views.updateOrderToDelivered,name='order-deliver'),

    path('orders/<str:pk>/', views.getOrderById, name='user-order'),
    path('<str:pk>/pay/', views.updateOrderToPaid, name='pay'),

    ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)