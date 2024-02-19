import Swal from 'sweetalert2'

export async function DeleteSure(Text: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        }).then(() => {
          resolve(); // Resolve the promise when the user confirms deletion
        });
      } else {
        reject(); // Reject the promise if the user cancels deletion
      }
    });
  });
}
