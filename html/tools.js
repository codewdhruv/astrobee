var tools =
[
    [ "Bag Processing", "bag_processing.html", [
      [ "Package Overview", "bag_processing.html#autotoc_md582", null ],
      [ "Usage Instructions", "bag_processing.html#autotoc_md583", null ],
      [ "Scripts", "bag_processing.html#autotoc_md584", [
        [ "<tt>apply_histogram_equalization_to_images</tt>", "bag_processing.html#autotoc_md585", null ],
        [ "<tt>bmr_renumber_enum</tt>", "bag_processing.html#autotoc_md586", null ],
        [ "<tt>check_bag_for_gaps</tt>", "bag_processing.html#autotoc_md587", null ],
        [ "<tt>clock_skew</tt>", "bag_processing.html#autotoc_md588", null ],
        [ "<tt>convert_bayer</tt>", "bag_processing.html#autotoc_md589", null ],
        [ "<tt>convert_all_bayer_bags</tt>", "bag_processing.html#autotoc_md590", null ],
        [ "<tt>csv_join</tt>", "bag_processing.html#autotoc_md591", null ],
        [ "<tt>get_msg_stats</tt>", "bag_processing.html#autotoc_md592", null ],
        [ "<tt>merge_bags</tt>", "bag_processing.html#autotoc_md593", null ],
        [ "<tt>merge_all_bags</tt>", "bag_processing.html#autotoc_md594", null ],
        [ "<tt>rosbag_detect_bad_topics</tt>", "bag_processing.html#autotoc_md595", null ],
        [ "<tt>rosbag_fix_all</tt>", "bag_processing.html#autotoc_md596", null ],
        [ "<tt>rosbag_rewrite_types</tt>", "bag_processing.html#autotoc_md597", null ],
        [ "<tt>rosbag_topic_filter</tt>", "bag_processing.html#autotoc_md598", null ],
        [ "<tt>splice_bag</tt>", "bag_processing.html#autotoc_md599", null ],
        [ "<tt>trim_bag</tt>", "bag_processing.html#autotoc_md600", null ]
      ] ]
    ] ],
    [ "Calibration", "calibration.html", [
      [ "Package Overview", "calibration.html#autotoc_md601", null ],
      [ "Camera Target Based Intrinsics Calibration", "calibration.html#autotoc_md602", [
        [ "Example Usage", "calibration.html#autotoc_md603", [
          [ "Generate target detections from bagfiles", "calibration.html#autotoc_md604", null ],
          [ "View target detection coverage in image space", "calibration.html#autotoc_md605", null ],
          [ "Calibrate", "calibration.html#autotoc_md606", [
            [ "Calibration Parameters", "calibration.html#autotoc_md607", null ],
            [ "Run Calibration", "calibration.html#autotoc_md608", null ],
            [ "Calibration Output", "calibration.html#autotoc_md609", null ],
            [ "Judging Calibration Results", "calibration.html#autotoc_md610", null ]
          ] ]
        ] ]
      ] ],
      [ "Tools", "calibration.html#autotoc_md614", [
        [ "create_undistorted_images", "calibration.html#autotoc_md615", null ],
        [ "run_camera_target_based_intrinsics_calibrator", "calibration.html#autotoc_md616", null ]
      ] ],
      [ "Scripts", "calibration.html#autotoc_md617", [
        [ "calibrate_intrinsics_and_save_results.py", "calibration.html#autotoc_md618", null ],
        [ "copy_calibration_params_to_config.py", "calibration.html#autotoc_md619", null ],
        [ "get_bags_with_topic.py", "calibration.html#autotoc_md620", null ],
        [ "make_error_histograms.py", "calibration.html#autotoc_md621", null ],
        [ "save_images_with_target_detections.py", "calibration.html#autotoc_md622", null ],
        [ "view_all_detections.py", "calibration.html#autotoc_md623", null ]
      ] ]
    ] ],
    [ "GNC Visualizer", "gncvisualizer.html", "gncvisualizer" ],
    [ "IMU Bias Tester", "imubiastester.html", [
      [ "Usage", "imubiastester.html#autotoc_md642", null ],
      [ "Inputs", "imubiastester.html#autotoc_md643", null ],
      [ "Outputs", "imubiastester.html#autotoc_md644", null ]
    ] ],
    [ "Localization Analysis", "localizationanalysis.html", [
      [ "Package Overview", "localizationanalysis.html#autotoc_md645", [
        [ "ROS Mode", "gncvisualizer.html#autotoc_md624", null ],
        [ "DDS Mode", "gncvisualizer.html#autotoc_md625", [
          [ "On-orbit activities", "gncvisualizer.html#autotoc_md626", null ]
        ] ],
        [ "Dependencies", "gncvisualizer.html#autotoc_md627", [
          [ "If used along with the Astrobee Robot Software", "gncvisualizer.html#autotoc_md628", null ],
          [ "If using as a standalone tool", "gncvisualizer.html#autotoc_md629", null ]
        ] ],
        [ "Installing dependencies", "gncvisualizer.html#autotoc_md630", [
          [ "Installing Python", "gncvisualizer.html#autotoc_md631", null ],
          [ "Installing PIP", "gncvisualizer.html#autotoc_md632", null ],
          [ "Installing the RTI connector (DDS Only)", "gncvisualizer.html#autotoc_md633", null ],
          [ "Installing QT in standalone mode", "gncvisualizer.html#autotoc_md634", null ]
        ] ],
        [ "Platform support", "gncvisualizer.html#autotoc_md635", null ],
        [ "ImuBiasTester", "imubiastester.html#autotoc_md641", null ],
        [ "Usage Instructions", "localizationanalysis.html#autotoc_md646", null ]
      ] ],
      [ "Tools", "localizationanalysis.html#autotoc_md647", [
        [ "<tt>convert_depth_msg</tt>", "localizationanalysis.html#autotoc_md648", null ],
        [ "<tt>run_bag_imu_filterer</tt>", "localizationanalysis.html#autotoc_md649", null ],
        [ "<tt>run_depth_odometry_adder</tt>", "localizationanalysis.html#autotoc_md650", null ],
        [ "<tt>run_graph_bag</tt>", "localizationanalysis.html#autotoc_md651", null ],
        [ "<tt>run_imu_bias_tester_adder</tt>", "localizationanalysis.html#autotoc_md652", null ],
        [ "<tt>run_sparse_mapping_pose_adder</tt>", "localizationanalysis.html#autotoc_md653", null ]
      ] ],
      [ "Scripts", "localizationanalysis.html#autotoc_md654", [
        [ "<tt>bag_and_parameter_sweep</tt>", "localizationanalysis.html#autotoc_md655", null ],
        [ "<tt>bag_sweep</tt>", "localizationanalysis.html#autotoc_md656", null ],
        [ "<tt>depth_odometry_parameter_sweep</tt>", "localizationanalysis.html#autotoc_md657", null ],
        [ "<tt>get_average_opt_and_update_times</tt>", "localizationanalysis.html#autotoc_md658", null ],
        [ "<tt>groundtruth_sweep</tt>", "localizationanalysis.html#autotoc_md659", null ],
        [ "<tt>imu_analyzer</tt>", "localizationanalysis.html#autotoc_md660", null ],
        [ "<tt>make_groundtruth</tt>", "localizationanalysis.html#autotoc_md661", null ],
        [ "<tt>make_map</tt>", "localizationanalysis.html#autotoc_md662", null ],
        [ "<tt>parameter_sweep</tt>", "localizationanalysis.html#autotoc_md663", null ],
        [ "<tt>plot_all_results</tt>", "localizationanalysis.html#autotoc_md664", null ],
        [ "<tt>plot_results</tt>", "localizationanalysis.html#autotoc_md665", null ],
        [ "<tt>run_graph_bag_and_plot_results</tt>", "localizationanalysis.html#autotoc_md666", null ]
      ] ]
    ] ],
    [ "Localization Rviz Plugins", "localizationrvizplugins.html", [
      [ "Package Overview", "localizationrvizplugins.html#autotoc_md667", [
        [ "Plugins", "localizationrvizplugins.html#autotoc_md668", null ],
        [ "Localization Graph Display", "localizationrvizplugins.html#autotoc_md669", null ],
        [ "Localization Graph Panel", "localizationrvizplugins.html#autotoc_md670", null ],
        [ "Imu Augmentor Display", "localizationrvizplugins.html#autotoc_md671", null ],
        [ "Pose Display", "localizationrvizplugins.html#autotoc_md672", null ]
      ] ]
    ] ],
    [ "DDS Profile and Types", "dds_profile.html", null ],
    [ "Interactive Marker Teleop", "interactive_marker_teleop.html", null ],
    [ "Performance Tester", "performance_tester.html", null ]
];