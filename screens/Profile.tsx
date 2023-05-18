// import * as React from 'react';
// import { Text, View } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

interface ProfileData {
    name: string;
    phoneNumber: string;
    major: string;
    graduationDate: string;
    employers: string[];
}

const Profile: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState<ProfileData>({
        name: '',
        phoneNumber: '',
        major: '',
        graduationDate: '',
        employers: [],
    });

    const handleInputChange = (field: keyof ProfileData, value: string) => {
        setProfileData((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const handleAddEmployer = () => {
        setProfileData({
            ...profileData,
            employers: [...profileData.employers, { name: '' }],
        });
    };

    const handleRemoveEmployer = () => {
        profileData.employers.splice(profileData.employers.length - 1, 1);
        setProfileData({
            ...profileData,
        });
    };

    const handleSave = () => {
        // Save the profile data in the frontend or send to backend API
        setIsEditing(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Name:</Text>
                <TextInput
                    style={styles.input}
                    value={profileData.name}
                    editable={isEditing}
                    onChangeText={(text) => handleInputChange('name', text)}
                />
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Phone Number:</Text>
                <TextInput
                    style={styles.input}
                    value={profileData.phoneNumber}
                    editable={isEditing}
                    onChangeText={(text) => handleInputChange('phoneNumber', text)}
                />
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Major:</Text>
                <TextInput
                    style={styles.input}
                    value={profileData.major}
                    editable={isEditing}
                    onChangeText={(text) => handleInputChange('major', text)}
                />
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Graduation Date:</Text>
                <TextInput
                    style={styles.input}
                    value={profileData.graduationDate}
                    editable={isEditing}
                    onChangeText={(text) => handleInputChange('graduationDate', text)}
                />
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Previous/Current Employers:</Text>
                {profileData.employers.map((employer, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
                        value={employer.name}
                        editable={isEditing}
                        onChangeText={(text) => {
                            const updatedEmployers = [...profileData.employers];
                            updatedEmployers[index] = { name: text };
                            handleInputChange('employers', updatedEmployers);
                        }}
                    />
                ))}
                {isEditing && (
                    <View style={styles.employerButtonContainer}>
                        <TouchableOpacity style={styles.employerAddButton} onPress={handleAddEmployer}>
                            <Text style={styles.employerButtonText}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.employerRemoveButton} onPress={handleRemoveEmployer}>
                            <Text style={styles.employerButtonText}>-</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
            <View style={styles.buttonContainer}>
                {isEditing ? (
                    <TouchableOpacity style={styles.button} onPress={handleSave}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.button} onPress={() => setIsEditing(true)}>
                        <Text style={styles.buttonText}>Edit</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#101010'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FFFFFF'
    },
    fieldContainer: {
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#FFFFFF'
    },
    input: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: '#FFFFFF'
    },
    buttonContainer: {
        marginTop: 20,
    },
    button: {
        backgroundColor: '#950000',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    employerButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    employerAddButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginHorizontal: 10
    },
    employerRemoveButton: {
        backgroundColor: '#C02200',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginHorizontal: 10
    },
    employerButtonText: {
        color: '#000000',
        fontWeight: 'bold'
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Profile;

