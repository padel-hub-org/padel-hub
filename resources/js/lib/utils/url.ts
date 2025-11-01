export function parentPath(path: string): string {
	const segments = path.split("/").filter(Boolean);
	if (segments.length <= 1) return "/";
	segments.pop();
	return "/" + segments.join("/");
}