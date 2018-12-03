const search = function(nums, target) {
	let start = 0;
	let end = nums.length - 1;
	let mid = Math.floor((start + end) / 2);
	let result = -1;

	while (nums[mid] !== target && start < end) {
		if (target > nums[mid]) {
			start = mid + 1;
		}
		if (target < nums[mid]) {
			end = mid - 1;
		}
    mid = Math.floor((start + end) / 2);
	}
	if (nums[mid] === target) {
		result = mid;
	}
	return result;
}