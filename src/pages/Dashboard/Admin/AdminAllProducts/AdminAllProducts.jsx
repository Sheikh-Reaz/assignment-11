import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useDocumentTitle from "../../../../hooks/useDocumentTitle";

const AdminAllProducts = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useAuth();

  const { data: products = [], refetch, isLoading } = useQuery({
    queryKey: ["products", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get("/all-products");
      console.log("Products received:", res.data); // Debug log
      return Array.isArray(res.data) ? res.data : [];
    },
  });

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/product/${id}`);
        if (
          res.data.deletedCount > 0 ||
          res.data.message === "Product deleted successfully"
        ) {
          Swal.fire("Deleted!", "Your product has been deleted.", "success");
          refetch();
        }
      }
    });
  };

  const handleShowOnHomeToggle = async (productId, currentValue) => {
    try {
      const res = await axiosSecure.patch(`/update-product/${productId}`, {
        showOnHome: !currentValue,
      });
      if (res.data.success) refetch();
    } catch (error) {
      console.error("Failed to update showOnHome:", error);
    }
  };

  useDocumentTitle("All Products");

  if (isLoading) return <p>Loading products...</p>;

  // Debug: Check what's in products array
  console.log("Products state:", products);
  console.log("Products length:", products.length);

  return (
    <div className="overflow-x-auto w-full">
      <h1 className="mb-4 text-2xl font-semibold">Manage Products</h1>

      <p className="mb-2 font-medium">Total products: {products.length}</p>

      <table className="table w-full">
        <thead>
          <tr>
            <th>SL</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Created By</th>
            <th>Show On Home</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products && products.length > 0 ? (
            products.map((product, i) => (
              <tr key={product._id || product.productId}>
                <td>{i + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask h-20 w-20">
                      <img src={product.productImg} alt={product.title} />
                    </div>
                  </div>
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.sellerEmail}</td>
                <td>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-error"
                    checked={product.showOnHome === true}
                    onChange={() =>
                      handleShowOnHomeToggle(product.productId, product.showOnHome)
                    }
                  />
                </td>
                <td>
                  <button
                    className="btn mr-2"
                    onClick={() => navigate(`../update-product/${product.productId}`)}
                  >
                    Update
                  </button>
                  <button
                    className="btn"
                    onClick={() => handleDelete(product.productId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">
                No products found
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <th>SL</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Created By</th>
            <th>Show On Home</th>
            <th>Actions</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default AdminAllProducts;