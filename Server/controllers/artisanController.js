export const artisan = async (req,res) =>{
      try {
        res.send("hello world")
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
}