import { Link } from "../../atom/link";

export const LinkShowcase = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Links</h3>

      <div className="flex gap-2">
        <Link href="#" color="base">
          base link
        </Link>
        <Link href="#" color="blue">
          blue link
        </Link>
      </div>
    </div>
  );
};
